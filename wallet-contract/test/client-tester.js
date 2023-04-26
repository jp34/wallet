const { MarketClient } = require("../scripts/MarketClient.js");
const { ServerClient } = require("../scripts/ServerClient.js");
const { ethers } = require("ethers");
require("dotenv").config();

async function main() {
    const id = 27;
    const uri = 'ipfs://ADXZmY1ZJAgDhUJfKEn1ayL8JJCD6RgJ6UQtf6Kj3M8Xv6';
    const price = ethers.utils.parseEther("1");
    const provider = new ethers.providers.JsonRpcProvider(process.env.PROVIDER_LINK);
    const buyer = new ethers.Wallet(process.env.GANACHE_PK2, provider);

    // Test Server Client
    const sClient = new ServerClient();
    const voucher = await sClient.makeVoucher(id, uri, price);
    console.log(voucher + '\n---------------------------------');

    // Test Market Client
    const mClient = new MarketClient();
    const receiptId = await mClient.redeemNFT(buyer, voucher, price);
    console.log(receiptId);
}





main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

