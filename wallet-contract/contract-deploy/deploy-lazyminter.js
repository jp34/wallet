const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const [deployer] = await ethers.getSigners();
  const balance = await deployer.getBalance();
  const LazyNFT = await hre.ethers.getContractFactory("LazyNFT");
  const lazyNFT = await LazyNFT.deploy(deployer.address);

  await lazyNFT.deployed();

  const data = {
    address: lazyNFT.address,
    abi: JSON.parse(lazyNFT.interface.format('json'))
  }
  console.log(data.address + " adfasdfASDASDASD")
  // console.log(`Data: ${JSON.stringify(data)}`);
  //This writes the ABI and address to the json
  fs.writeFileSync('./src/LazyNFT.json', JSON.stringify(data))
  console.log("Contract Successfully Deployed! Details found at lib/lazyNFT.json");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
