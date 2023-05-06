# [Healthcare Wallet](https://github.com/Healthcare-Wallet/wallet/tree/main) / [Wiki](https://github.com/Healthcare-Wallet/wallet/tree/main/wiki) / [Guides](https://github.com/Healthcare-Wallet/wallet/tree/main/wiki/guides) / Blockchain Deployment

## Purpose

This guide will demonstrate how to successfully deploy and test our market contract. This guide can be used in conjunction with the [Full Deployment Guide](https://github.com/Healthcare-Wallet/wallet/tree/main/wiki/guides/BlockchainDeployment.md).

# Steps

#### **Project Setup**

Install Dependencies
```
cd <path_to_project_root>\wallet-contract
npm install
```

Create a new .env file with the following variables

```
PROVIDER_LINK       \\ Infura provider link
MM_PK               \\ The private key of the Administrator Wallet
```

#### **Deploy the contract**

```
npx hardhat run contract-deploy/deploy-lazyminter.js
```

#### **Test the contract**

```
npx hardhat run test/deployment.test.js
node test/client-tester.js                  // For javascript object
node test/oldlazytester.js                  // Direct contract testing
```

By now you have a working contract deployed to you selected network, for more contract usage information refer to the [Blockchain Usage Guide](https://github.com/Healthcare-Wallet/wallet/tree/main/wiki/guides/BlockchainUsage.md).
