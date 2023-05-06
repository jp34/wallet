# [Healthcare Wallet](https://github.com/Healthcare-Wallet/wallet/tree/main) / [Wiki](https://github.com/Healthcare-Wallet/wallet/tree/main/wiki) / [Guides](https://github.com/Healthcare-Wallet/wallet/tree/main/wiki/guides) / Blockchain Usage

This guide will show you how to create a voucher using the marketplace contract and the functions provided by our client objects.

## Making a Voucher

Vouchers can be made through the JS class object found at: wallet-contract/scripts/ServerClient.js

To create a voucher, simply create the ServerClient object which can be found in this file

```
<path_to_project_root>\wallet-contract\scripts\MarketClient.js
```

## Client Objects

Each client object provides the functions required by each service that needs to communicate with the marketplace contract.

#### **ServerClient**

This object is located under \wallet-contract\scripts\ServerClient.js and it provides the following functions:

```
createVoucher(id, uri, price)
```
id: The id of the unminted token  
uri: The associated voucher URI  
price: The minimum price of the new NFT

```
transferPatientFunds(patientAddress, amount)
```
patientAddress: The address of the patient who needs to be paid  
amount: The amount to pay the patient

#### **MarketClient**

This object is located under \wallet-contract\scripts\MarketClient.js and it provides the following functions:

```
redeemNFT(buyer, voucher, price)
```
buyer: The address of the wallet that wants to purchase the NFT  
voucher: The voucher to be minted into an NFT  
price: The price to be paid for the new NFT  

```
getNFTFromListedToken(buyer, tokenId)
```
buyer: The address of the wallet that bought the NFT  
tokenId: The id of the purchased token
