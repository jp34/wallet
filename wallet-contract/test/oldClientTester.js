const { ContractHandler } = require("../contract-object/ContractHandler.js");
const { ethers, Wallet } = require("ethers");
require("dotenv").config();
const { GANACHE_PK2, GANACHE_PK3, PROVIDER_LINK } = process.env;

async function main() {
    const provider = new ethers.providers.JsonRpcProvider(PROVIDER_LINK);
    const handler = new ContractHandler();
    const test = handler.contractAddress;
    console.log('Contract Address: ' + test);

    // How to make a Voucher
    const id = 6;
    const uri = 'ipfs://ADXZmY1ZJAgDhUJfKEn1ayL8JJCD6RgJ6UQtf6Kj3M8Xv6';
    const price = ethers.utils.parseEther("1");
    // const voucher = await handler.makeVoucher(id, uri, price);
    const voucher = await handler.makeVoucher(id, uri, price);
    // Voucher contains 3 values: tokenId, uri, and minPrice
    console.log('Test Voucher Data\nID: ' + voucher.tokenId + '\nURI: ' + voucher.uri + '\nPrice: ' + voucher.minPrice);

    // How to redeem a Voucher (backend)
    const buyer = new Wallet(GANACHE_PK2, provider);
    const txReceipt = await handler.redeemVoucher(buyer, voucher, price);
    const [transferEvent] = txReceipt.events;
    const { tokenId } = transferEvent.args;
    console.log('Redeemed By:' + buyer.address + '\nToken ID: ' + tokenId);

    // Testing other contract functionality
    console.log(`Searching for NFT with tokenID: ${id}`);
    const myNFT = handler.getNFTFromTokenId(buyer, id);
    console.log(`Found Token from ID ${myNFT.tokenId}: ${myNFT.tokenId}`);
    console.log('---------------------------');
    const patient = new Wallet(GANACHE_PK3, provider);
    const patientWithdrawal = ethers.utils.parseEther("1");
    const txReceipt2 = await handler.patientEtherTransfer(patient.address, patientWithdrawal);
    const [transferEvent2] = txReceipt.events;
    const { value } = transferEvent2.args;
    console.log(value + " Ether sent to " + patient.address);
  }

  async function getNFTFromTokenId(buyer, tokenId) {
    const handler = new ContractHandler();
    const myNFT = await handler.getNFTFromTokenId(buyer, tokenId);
  }

  // id = product Id that will become the tokenId
  // uri = IPFS Link to metadata
  // price = price of NFT
  // This function makes a voucher and stores it in the database
  async function makeVoucher(id, uri, price) {
    const handler = new ContractHandler();
    const voucher = await handler.makeVoucher(id, uri, price);
    // TODO: Add voucher to product table record
    return voucher;
  }

  async function redeemNFT(buyer, voucher, price) {
    const handler = new ContractHandler();
    const tx = await handler.redeemVoucher(buyer, voucher, price);
    const [transferEvent] = txReceipt.events;
    const { tokenId } = transferEvent.args;
    console.log('Redeemed By:' + buyer.address + '\nToken ID: ' + tokenId);
    // TODO: Add receipt to product table record
    return tokenId;
  }

  async function checkPatientWithdrawal(patientId) {
    // TODO: get patientAddress and withdrawalBalance from server
    // const balance = database -> get patient record from patientId -> get withdrawalBalance / patientAddress from record
    const balance = 1;
    if (balance > 0) {
        this.patientTransferFunds(patientAddress, amount);
    }
  }

  // WARNING: This function should only be called after verifying that patientAddress is a patient's wallet address.
  async function patientTransferFunds(patientAddress, amount) {
    const handler = new ContractHandler();
    const bal = handler.patientEtherTransfer(patientAddress, amount);
    console.log("balance: " + bal + " has been sent to: " + patientAddress);
    // TODO: UPDATE DATABASE TO RESET PATIENT withdrawalBalance TO 0
  }

  main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });