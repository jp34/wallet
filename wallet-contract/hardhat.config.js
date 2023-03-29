// require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require('dotenv').config();
const { MNEMONIC, PROJECT_ID } = process.env;



module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    goerli: {
      url: PROJECT_ID,
      accounts: {
        mnemonic: MNEMONIC,
      },
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};