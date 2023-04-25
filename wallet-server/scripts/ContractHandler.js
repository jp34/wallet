const { Contract, Wallet } = require("ethers");
const { ethers } = require("ethers");
const { LazyMinter } = require("../scripts");
const LazyNFT = require("./LazyNFT.json");
require("dotenv").config();

// Secret Variables from .env file
// PROVIDER_LINK is a route to the blockchain (test network: infura.ganache)
// MM_PK is the private key of the administrator metamask account that signs vouchers and collects payment.
const { PROVIDER_LINK, SIGNER_PK } = process.env;
class ContractHandler {
  
  // Constructor initializes 3 types of connection info
  // Contract Info: Address and ABI collected from LazyNFT.json
  // Signer Info: link to provider and signer private key 

  constructor() {
    this.contractAddress = LazyNFT.address;
    this.contractABI = LazyNFT.abi;
    this.providerLink = PROVIDER_LINK;
    this.provider = null;
    this.signer = null;
    this.buyerContract = null;
    this.contract = null;
    this.init();
  }

  async init() {
    this.provider = new ethers.providers.JsonRpcProvider(PROVIDER_LINK);
    this.signer = new Wallet(SIGNER_PK, this.provider);
    console.log('Signer: ' + this.signer.address);
    this.contract = new ethers.Contract(this.contractAddress, this.contractABI, this.signer);
  }

  /* VOUCHERS */

  // Create a voucher from a tokenId (productId), a uri (IPFS Link) 
  // a seller account (signer object) and a price (in ether)
  async makeVoucher(id, uri, price) {
    // Create the Voucher
    await this.init();
    const chainId = this.contract.chainId;
    console.log('Chain: (should be undef): ' + chainId);
    const lazyMinter = new LazyMinter({ contract: this.contract, signer: this.signer});
    const voucher = await lazyMinter.createVoucher(id, uri, price);
    console.log(`Voucher created for Token: ${voucher.tokenId}`);
    /* CODE TO STORE VOUCHER IN DATABASE OR CONTRACT GOES HERE */
    return voucher;
  }

  // Redeem a voucher from a buyers account given a price.
  async redeemVoucher(buyer, voucher) {
    await this.init();
    const price = voucher.minPrice;
    const buyerContract = new Contract(this.contractAddress, this.contractABI, buyer);
    const tx = await buyerContract.redeem(buyer.address, voucher, { value: price })
    const txReceipt = await tx.wait();
    // const [transferEvent] = txReceipt.events;
    // const { tokenId } = transferEvent.args;
    console.log(`new NFT minted and purchased.\nBuyer Address: ${buyer.address}\ncost: ${price} Wei.`);
    /* CODE TO STORE NFT PURCHASE INFO IN DATABASE OR CONTRACT GOES HERE */
    const bal = await this.withdraw();
    console.log(bal + ' Ether has been received by Admin Account.')
    return txReceipt;
  }


  /* WITHDRAWALS */
  // Check if payment is available
  async checkWithdrawalBalance() {
    await this.init();
    const contractBalance = await this.contract.availableToWithdraw();
    const weiBalance = ethers.BigNumber.from(contractBalance.toBigInt());
    const valueInEther = ethers.utils.formatEther(weiBalance);
    console.log(`${valueInEther} Ether available for withdrawal.`);
    return valueInEther;
  }

  // Withdraw funds from sold NFTs
  async withdraw() {
    await this.init();
    console.log(`Attempting to withdraw Ether from contract to admin account.`);
    const availableBalance = await this.checkWithdrawalBalance();
    const tx = await this.contract.withdraw();
    const txReceipt = await tx.wait();
    console.log(`${availableBalance} Ether has been sent to account ${this.signer.address}.`);
    /* CODE TO STORE WITHDRAWAL INFO IN DATABASE OR CONTRACT GOES HERE */
    return availableBalance;
  }

  // Transfer Ether to patient
  async patientEtherTransfer(patientAddress, amount) {
    await this.init();
    const bal = await this.checkWithdrawalBalance();
    if (bal > 0) {
      this.withdraw();
    }
    const tx = await this.contract.transferEther(patientAddress, amount, {value: amount});
    const txReceipt = await tx.wait();
    // RESET AMOUNT OWED TO PATIENT TO 0 HERE
    return txReceipt;
  }

  async getNFTFromTokenId(signer, tokenId) {
    await this.init();
    const signerContract = new Contract(this.contractAddress, this.contractABI, signer);
    const NFTData = await signerContract.getListedTokenForId(tokenId);
    return NFTData;
  }

  async getAccountNFTs() {
    await this.init();
    const NFTData = await this.contract.getMyNFTs();
    return NFTData;
  }

  // Retrieve IPFS Link from token metadata (currently broken)
  async getTokenMetadata(tokenId) {
    await this.init();
    const metadataURI = await this.getMetadataURI(tokenId);
    console.log("URI: " + metadataURI);
    const response = await axios.get(metadataURI);
    const metadata = response.data;
    return metadata;
  }

  // Retrieve token metadata URI
  async getMetadataURI(tokenId) {
    await this.init();
    // const contract = new ethers.Contract(contractAddress, contractABI, signer);
    const tokenURI = await this.contract.tokenURI(tokenId);
    return tokenURI;
  }
}

module.exports = {
  ContractHandler
}