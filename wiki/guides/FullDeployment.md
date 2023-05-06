# [Healthcare Wallet](https://github.com/Healthcare-Wallet/wallet/tree/main) / [Wiki](https://github.com/Healthcare-Wallet/wallet/tree/main/wiki) / [Guides](https://github.com/Healthcare-Wallet/wallet/tree/main/wiki/guides) / Full Deployment

## Purpose

This guide will demonstrate a full deployment of the Healthcare Wallet system. It will take you through the process of building and deploying each sub-project to create the larger system from scratch.

**_NOTE:_** This deployment guide does not include our blockchain implementation. For that, please refer to the [Blockchain Deployment Guide](https://github.com/Healthcare-Wallet/wallet/tree/main/wiki/guides/BlockchainDeployment.md) which should be using in conjunction with this guide.

## Requirements

1. Ability to clone this repository
2. Linux server with docker installed
3. Web3.storage account (Our IPFS client)

## Components

1. [wallet-server](https://github.com/Healthcare-Wallet/wallet/tree/main/wallet-server)

> This is a REST API built with Node.js and Express.js responsible for managing CRUD operations on our database.

2. [wallet-mobile](https://github.com/Healthcare-Wallet/wallet/tree/main/wallet-mobile)

> This is a mobile application build with React Native and is the product delivered to our users.

3. [wallet-market](https://github.com/Healthcare-Wallet/wallet/tree/main/wallet-market)

> This is our marketplace website that allows end customers to purchase our NFT products.

# Steps

**_NOTE:_** Each of the following steps should be run on your Linux server

#### **Clone the repository**

```
git clone https://github.com/Healthcare-Wallet/wallet.git
```

#### **Configure production environment**

The production.env file is a sample environment that defines all the required variables.

Database Configuration
```
POSTGRES_USER               // Database User
POSTGRES_PASSWORD           // Database Password
POSTGRES_DB                 // Database Name
```

API Configuration
```
API_SERVER_HOST
API_SERVER_PORT
API_SERVER_ACCESS_SECRET    // Secret used for signing access tokens
API_SERVER_REFRESH_SECRET   // Secret used for signing refresh tokens
API_SERVER_ACCESS_EXP       // Lifespan of access tokens (12h)
API_SERVER_REFRESH_EXP      // Lifespan of refresh tokens (1h)
API_IPFS_TOKEN              // Token from web3.storage account
DATABASE_URL                // PostgreSQL connection string
```

**_NOTE:_** The PostgreSQL connection must reflect that the database is running in a separate docker container (The database hostname is the name of the docker container).

#### **Build docker containers**

```
cd wallet
docker-compose build
```
This will build a Docker image from the wallet-server project, and also pull the appropriate image for PostgreSQL (postgres:15.2)

#### **Run docker containers**

```
docker-compose up
```

Once successfully deployed, the Rest API will be available at host port 8000, and the database will be available at host port 5432.

**_NOTE:_** Docker compose will not wait for the database to be running before starting wallet-server. So you may need to repeat step 4 until the database begins accepting connections before the server is running.

#### **Migrate database schema**

```
cd <path_to_project_root>\wallet-server
npx prisma db push
```
#### **Start the mobile application**

```
cd <path_to_project_root>\wallet-mobile
npm install
npm run start   // If you want to run in the browser use `npm run web` instead
```

**_NOTE:_** The mobile application can work from a laptop or ios device, however you may be required to configure SSL encryption on the machine running the wallet-server container.

#### **Start the marketplace website**

```
cd <path_to_project_root>\wallet-market
npm install
npm run start
```
