// require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require('dotenv').config();
const { MNEMONIC, PROJECT_ID, GANACHE_MC } = process.env;

task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  defaultNetwork: "hardhat",
  solidity: "0.8.4",
  networks: {
    hardhat: {
      chainId: 1337
    },
    ganache: {
      url: "http://127.0.0.1:7545",
      accounts: {
        mnemonic: GANACHE_MC
      }
    },
    goerli: {
      url: PROJECT_ID,
      accounts: {
        mnemonic: MNEMONIC,
      },
    }
  }
};