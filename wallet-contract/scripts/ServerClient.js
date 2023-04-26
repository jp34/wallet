// This file is meant to be called by the server when creating a new voucher
// and by patients who have signed into the market website

// A JS Class that creates an object capable of making transactions on the contract.
const { ContractHandler } = require("../contract-object/ContractHandler.js");
// Required ethers imports to facilitate communcation to the blockchain
const { ethers } = require("ethers");
// Secret connection variables (currently unnecessary)
// require("dotenv").config();
// const { GANACHE_PK2, PROVIDER_LINK } = process.env;
class ServerClient {

  constructor() {
    this.name = "ServerClient";
  }

/* The server will call this function after a patient clicks "Agree to Sell Data"
1. Mobile User clicks "Agree to Sell Data" button which calls createVoucher(patientId) function in wallet-server
2. This wallet-server function collects the 3 variables necessary for a Voucher:
(uri): Server gets patient data from patientId and converts it into an IPFS Link
(id and price): Server determines new productId and price values for the voucher
3. Server calls this Server-Client function to create a voucher from LazyMinter.js */

/**
   * Creates a new NFTVoucher object and signs it using this LazyMinter's signing key.
   * 
   * @param {ethers.BigNumber | number} tokenId the id of the un-minted NFT
   * @param {string} uri the metadata URI to associate with this NFT
   * @param {ethers.BigNumber | number} minPrice the minimum price (in wei) that the creator will accept to redeem this NFT. defaults to zero
   * 
   * @returns {Object}
   */
  async makeVoucher(id, uri, minPrice) {
    const handler = new ContractHandler();
    const voucher = await handler.makeVoucher(id, uri, minPrice);
    // TODO: Add voucher to product table record
    return voucher;
  }


// patientTransferFunds Descripton:
/* The server will call this function after a patient signs in to the website and connects to metamask.
1. Patient signs into market website using their mobile app username and password
2. Server checks if market user is a patient if userId = patientId, updates isMobileUser field in User record to true
3. If userId = patientId, the market website will only display the "Connect To Metamask" button
4. Patient clicks "Connect To Metamask" button which calls connect()
5. connect() prompts the user to sign into metamask and stores the ens address in the user record
6. connect() then checks if user records has isMobileUser as true
7. If isMobileUser is true, server collects ens address from user record and withdrawalBalance from patient record
8. Server calls this function (patientTransferFunds)
9. upon success, server sends market frontend client a popup that they have been paid */

/**
   * Creates a new NFTVoucher object and signs it using this LazyMinter's signing key.
   * 
   * @param {string} patientAddress the address of the patient receiving funds
   * @param {ethers.BigNumber | number} amount the amount owed to the patient for selling their data
   * 
   * @returns {ethers.BigNumber | number}
   */
  // WARNING: This function should only be called after verifying that patientAddress is a patient's wallet address.
  async patientTransferFunds(patientAddress, amount) {
    const handler = new ContractHandler();
    const bal = handler.patientEtherTransfer(patientAddress, amount);
    console.log("balance: " + bal + " has been sent to: " + patientAddress);
    // TODO: UPDATE DATABASE TO RESET PATIENT withdrawalBalance TO 0
    return bal;
  }

}

module.exports = {
  ServerClient
}
