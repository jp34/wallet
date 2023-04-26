// This file is an alternative means to calling market purchase functions using the admin metamask account

// A JS Class that creates an object capable of making transactions on the contract.
const { ContractHandler } = require("../contract-object/ContractHandler.js");
// Required ethers imports to facilitate communcation to the blockchain
const { ethers } = require("ethers");
// Secret connection variables (currently unnecessary)
require("dotenv").config();
const { MM_PK, PROVIDER_LINK } = process.env;
const provider = new ethers.providers.JsonRpcProvider(PROVIDER_LINK);
const signer = new ethers.Wallet(MM_PK, provider);

class MarketClient {

  constructor() {
    this.name = "MarketClient";
  }

async redeemNFT(buyer, voucher, price = 0) {
    if (price == 0) price = voucher.minPrice;
    const handler = new ContractHandler();
    const txReceipt = await handler.redeemVoucher(buyer, voucher, price);
    const [transferEvent] = txReceipt.events;
    const { tokenId } = transferEvent.args;
    console.log('Redeemed By:' + buyer.address + '\nToken ID: ' + tokenId);
    // TODO: Add receipt to product table record
    return tokenId;
  }

  async getNFTFromTokenId(buyer, tokenId) {
    const handler = new ContractHandler();
    const myNFT = await handler.getNFTFromTokenId(buyer, tokenId);
  }
}

module.exports = {
  MarketClient
}
