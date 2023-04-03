const { Contract } = require("ethers");
const hre = require("hardhat");
const LazyNFT = require("../src/LazyNFT.json");
const { LazyMinter } = require("../scripts");
require("dotenv").config();
// Infura Keys
const API_KEY = process.env.API_KEY;
const KEY_SECRET = process.env.KEY_SECRET;
const PROJECT_ID = process.env.PROJECT_ID;
// Collect contract info sent to LazyNFT.json after deployment
const contractAddress = LazyNFT.address;
const contractABI = LazyNFT.abi;

// Main
async function main() {
  const result = await runTests();
  console.log(`Done Testing.`);
}

/* VOUCHER FUNCTIONS */

// Create a voucher from a tokenId (productId), a uri (IPFS Link) 
// a seller account (signer object) and a price (in ether)
async function makeVoucher(id, uri, seller, price) {
  // Create Contract instance
   const contract = new Contract(contractAddress, contractABI, seller);
   // Create the LazyMinter
   const lazyMinter = new LazyMinter({ contract, signer: seller });
   // Create the Voucher
   const voucher = await lazyMinter.createVoucher(id, uri, price);
   // console.log(`Voucher created for Token: ${voucher.tokenId}`);
   /* CODE TO STORE VOUCHER IN DATABASE OR CONTRACT GOES HERE */
   return voucher;
}

// Redeem a voucher from a buyers account given a price.
async function redeemVoucher(buyer, voucher, price) {
  const buyerContract = new Contract(contractAddress, contractABI, buyer);
  const tx = await buyerContract.redeem(buyer.address, voucher, { value: price })
  const txReceipt = await tx.wait();
  const [transferEvent] = txReceipt.events;
  const { tokenId } = transferEvent.args;
  // console.log(`new token minted and trasferred at tokenId: ${tokenId}`);
  /* CODE TO STORE NFT PURCHASE INFO IN DATABASE OR CONTRACT GOES HERE */
  return tokenId;
}


/* WITHDRAWAL FUNCTIONS */
// Check if payment is available
async function checkWithdrawalBalance(signer) {
  const userContract = new Contract(contractAddress, contractABI, signer);
  const contractBalance = await userContract.availableToWithdraw();
  const weiBalance = ethers.BigNumber.from(contractBalance.toBigInt());
  const valueInEther = ethers.utils.formatEther(weiBalance);
  console.log(`${valueInEther} Ether available for withdrawal.`);
  return valueInEther;
}

// Withdraw funds from sold NFTs
async function withdraw(signer) {
  const availableBalance = await checkWithdrawalBalance(signer);
  const userContract = new Contract(contractAddress, contractABI, signer);
  const contractBalance = await userContract.withdraw();
  console.log(`${availableBalance} Ether has been sent to account ${signer.address}.`);
  /* CODE TO STORE WITHDRAWAL INFO IN DATABASE OR CONTRACT GOES HERE */
  return availableBalance;
}

// General Testing
async function runTests() {
  console.log(`Beginning Testing.`);
  // Setup
  const [seller, buyer] = await hre.ethers.getSigners();
  console.log(`Making Vouchers with the account: ${seller.address}`);
   console.log(`LazyNFT address: ${contractAddress}`);

  // Create
  const uri = 'ipfs://AZXZmY1ZJAgDhUJfKEn1ayL8JJCD6RgJ6UQtf6Kj3M8Xv6';
  const id = 27;
  const price = ethers.utils.parseEther("1");
  const newVoucher = await makeVoucher(id, uri, seller, price);

  // Redeem
  const receipt = await redeemVoucher(buyer, newVoucher, price);
  console.log(`new token minted and trasferred at tokenId: ${receipt}`);

  // Check Withdrawal
  // const availableBalance = await checkWithdrawalBalance(seller);

  // Withdraw
  const withdrawnFunds = await withdraw(seller);

  return withdrawnFunds;
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
