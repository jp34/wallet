const { Contract, Wallet } = require("ethers");
const { LazyMinter } = require("../scripts");
const hre = require("hardhat");
const LazyNFT = require("../src/LazyNFT.json");
const ethers = require("ethers");
require("dotenv").config();

// Infura Keys
const API_KEY = process.env.API_KEY;
const KEY_SECRET = process.env.KEY_SECRET;
const PROJECT_ID = process.env.PROJECT_ID;
const GANACHE_MC = process.env.GANACHE_MC;
const GANACHE_LINK = process.env.GANACHE_LINK;
const GANACHE_PK1 = process.env.GANACHE_PK1;
const GANACHE_PK2 = process.env.GANACHE_PK2;
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
   console.log(`Voucher created for Token: ${voucher.tokenId}`);
   /* CODE TO STORE VOUCHER IN DATABASE OR CONTRACT GOES HERE */
   return voucher;
}

// Redeem a voucher from a buyers account given a price.
async function redeemVoucher(buyer, voucher, price, seller) {
  const buyerContract = new Contract(contractAddress, contractABI, buyer);
  const tx = await buyerContract.redeem(buyer.address, voucher, { value: price })
  const txReceipt = await tx.wait();
  const [transferEvent] = txReceipt.events;
  const { tokenId } = transferEvent.args;
  console.log(`new NFT minted and purchased.\nbuyer address: ${buyer.address}\ncost: ${price} Wei.`);
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
  const tx = await userContract.withdraw();
  const txReceipt = await tx.wait();
  // const [transferEvent] = txReceipt.events;
  // const amt = transferEvent.args.value
  console.log(`${availableBalance} Ether has been sent to account ${signer.address}.`);
  /* CODE TO STORE WITHDRAWAL INFO IN DATABASE OR CONTRACT GOES HERE */
  return availableBalance;
}

async function getNFTFromTokenId(signer, tokenId) {
  const userContract = new Contract(contractAddress, contractABI, signer);
  const NFTData = await userContract.getListedTokenForId(tokenId);
  return NFTData;
}

async function getAccountNFTs(signer) {
  const userContract = new Contract(contractAddress, contractABI, signer);
  const NFTData = await userContract.getMyNFTs();
  return NFTData;
}

// Retrieve IPFS Link from token metadata
async function getTokenMetadata(signer, tokenId) {
  const metadataURI = await getMetadataURI(signer, tokenId);
  console.log("URI: " + metadataURI);
  const response = await axios.get(metadataURI);
  const metadata = response.data;
  return metadata;
}

// Retrieve token metadata URI
async function getMetadataURI(signer, tokenId) {
  const contract = new ethers.Contract(contractAddress, contractABI, signer);
  const tokenURI = await contract.tokenURI(tokenId);
  return tokenURI;
}
// General Testing
async function runTests() {
  console.log(`Beginning Testing.`);
  // Setup
  console.log('---------------------------');
  // const [seller, buyer] = await hre.ethers.getSigners();
  const provider = new ethers.providers.JsonRpcProvider(GANACHE_LINK);
  const seller = new Wallet(GANACHE_PK1, provider);
  const buyer = new Wallet(GANACHE_PK2, provider);
  console.log(`LazyNFT contract address: ${contractAddress}`);
  console.log(`Making Vouchers from address: ${seller.address}`);
  console.log(`Redeeming Vouchers from address: ${buyer.address}`);
  console.log('---------------------------');
  // Create
  const uri = 'ipfs://ADXZmY1ZJAgDhUJfKEn1ayL8JJCD6RgJ6UQtf6Kj3M8Xv6';

// Change for each test
  const id = 5;


  const price = ethers.utils.parseEther("1");
  console.log(`Creating a Voucher for tokenID: ${id} from Seller: ${seller.address}`)
  const newVoucher = await makeVoucher(id, uri, seller, price);
  console.log('---------------------------');

  // Redeem
  console.log(`Redeeming a Voucher from tokenID: ${id} from Seller: ${seller.address} to Buyer: ${buyer.address}`);
  const receipt = await redeemVoucher(buyer, newVoucher, price, seller);
  console.log('---------------------------');

  // View NFT from tokenId
  console.log(`Searching for NFT with tokenID: ${id}`)
  const myNFT = await getNFTFromTokenId(buyer, receipt);
  console.log(`Found Token from ID ${myNFT.tokenId}: ${myNFT}`);
  console.log('---------------------------');

  // View NFT from account
  console.log(`Searching for NFTs owned by Account: ${buyer.address}`);
  const NFTData = await getAccountNFTs(buyer);
  console.log('Listed Tokens Info:');
  console.log('=============================');
  for (i = 0; i < NFTData.length; i++) {
    const metadata = await getMetadataURI(buyer, myNFT.tokenId);
    console.log(`TokenId: ${NFTData[i].tokenId} \n Metadata: ${metadata} \n Seller: ${NFTData[i].seller} \n Buyer: ${buyer.address}`);
    console.log('=============================');
    }
  console.log('---------------------------');
  console.log(`Retrieving IPFS Link for NFT tokenID: ${myNFT.tokenId}`);
  const tokenData = await getMetadataURI(buyer, myNFT.tokenId);
  console.log(`IPFS link retrieved at: ${tokenData}`);
  console.log('---------------------------');

  // Withdraw
  // const availableBalance = await checkWithdrawalBalance(seller);
  console.log(`Checking withdrawal balance from: ${seller.address}`)
  const withdrawnFunds = await withdraw(seller);
  console.log(`Withdrawal payment succesfully sent to: ${seller.address}`)
  console.log('---------------------------');
  return withdrawnFunds;
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
