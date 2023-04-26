const { expect } = require("chai");
const hre = require("hardhat");
require('dotenv').config();
const { PROJECT_ID } = process.env;
// const { describe } = require("mocha");
// Get Address and ABI of deployed contract
const Marketplace =  require("../src/Marketplace.json");

describe("NFTMarketplace", function() {
  it("should find the metamask, provider, and contract address variables", async function() {
    // Ensure metamask
  const [adminAccount] = await hre.ethers.getSigners();
  expect(await adminAccount.getAddress()).to.not.be.null;
  console.log("Admin Account Address: " + await adminAccount.getAddress());

    // Ensure provider
  //const infuraEndpoint = ; // Replace with your Infura endpoint URL
  const provider = new hre.ethers.providers.JsonRpcProvider(PROJECT_ID);
  expect(await provider.getNetwork()).to.not.be.null;
  console.log("Provider Network: " + (await provider.getNetwork()).name);
    // Ensure contract address
  expect(Marketplace.address).to.not.be.null;
  console.log("Deployed Contract Address: " + Marketplace.address);
  });
  // Test if the contract instance can be connected using its address
  it("should connect to an existing contract instance", async function() {
    // Connect to existing contract
    const MarketplaceContract = await hre.ethers.getContractFactory("NFTMarketplace");
    const marketInstance = await MarketplaceContract.attach(Marketplace.address);
    // store instance globally
    // window.marketInstance = marketInstance;
    expect(marketInstance).to.not.be.null;
  });
  it("Should create a product given: Id, SellerAddress, teaserInfo, and IPFS uri.", async function() {
    // Connect to deployed contract from the first wallet account
    const accounts = await hre.ethers.getSigners();
    const signer = accounts[0];
    const MarketplaceContract = await hre.ethers.getContractFactory("NFTMarketplace");
    const marketInstance = await MarketplaceContract.attach(Marketplace.address);
    // marketInstance.connect(signer);
    // Create random productId, teaser, and uri
    // const newProductId = 1;
    // const teaser = "Amazing product";
    // const IPFS = "ipfs://QmX9yd45yNf7y1xTHNzKMNQ2EMoV3iZ4J4ZV7BjGUcYXe7";
    const newProduct = {
      productId: 1,
      sellerAddress: accounts[1].address,
      teaserInfo: "Amazing product",
      ipfsUri: "ipfs://QmX9yd45yNf7y1xTHNzKMNQ2EMoV3iZ4J4ZV7BjGUcYXe7"
    };
    
    // Define seller
    const sellerAddr = accounts[1].address;
    // Call the solidity function to create the product
    const tx = await marketInstance.createProduct(data);
    
  });
  it("Should find the product event receipt", async function() {
    const accounts = await hre.ethers.getSigners();
    const signer = accounts[0];
    const MarketplaceContract = await hre.ethers.getContractFactory("NFTMarketplace");
    const marketInstance = await MarketplaceContract.attach(Marketplace.address);
    contract.events.ProductListedSuccess({ filter: { productId: 1 } })
    .on('data', function(event) {
        console.log(event.returnValues);
    });
    // Collect created product's return id and log it
    // const productIdReturn = event.returnValues[0];
    // console.log("Product ID:", productIdReturn);
    // // Expect correct event
    // expect(event.event).to.equal("ProductListedSuccess");
    // expect(event.args.productId).to.equal(newProductId);
    // expect(event.args.sellerAddress).to.equal(sellerAddr);
    // expect(event.args.teaserInfo).to.equal(teaser);
    // expect(event.args.uri).to.equal(IPFS);
  });
});