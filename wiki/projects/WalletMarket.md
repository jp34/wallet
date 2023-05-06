# [Healthcare Wallet](https://github.com/Healthcare-Wallet/wallet/tree/main) / [Wiki](https://github.com/Healthcare-Wallet/wallet/tree/main/wiki) / [Projects](https://github.com/Healthcare-Wallet/wallet/tree/main/wiki/projects) / wallet-market

### Repo Link: [wallet-market](https://github.com/Healthcare-Wallet/wallet/tree/main/wallet-market)

## Description

The JustBe Marketplace, or “Marketplace” for short, is one of the three main developmental projects derived from the “Healthcare Wallet” Project. For system users however, it exists as one of two interfaces for users.

## Features

The main functionality of the Marketplace is to serve as a shop front for disease researchers to find and purchase NFTs created and listed from patient Mobile Wallet accounts. These NFTs are dynamically updated as cards to the Marketplace from our database. Each of these NFTs are displayed with a small set of advertising data in order to attract potential buyers. They are also accompanied by a photo that is related to that advertising data, however those photos are implemented on the frontend alone, not dynamically configured at this moment.

The secondary functionality of the Marketplace is to serve as a liaison between the Mobile Wallet user and MetaMask services. In our development, we noticed some difficulties accessing MetaMask within our React Mobile app, and thus the Marketplace adopted certain functionalities to cover this, allowing us to get more of our scope finished within the project time frame. We call this functionality the “Patient Portal.” The Patient Portal is a button and modal within the Marketplace that would allow Mobile Wallet users to login via MetaMask as well as with their Wallet Mobile Credentials, which we can then link and save in our database. This would allow us to determine which MetaMask account needs to be paid once a dataset is sold.

## Future Plans

The Marketplace was one of the last pieces of production for this project so unfortunately it was also the piece that succumbed to scoping problems the most. Despite being able to see real patient advertising data on the marketplace, there are many more things that we would have liked to implement. Many blockchain functionalities have their backend code complete, but could not be implemented into the Marketplace within our timeframe. These include purchasing, retrieving purchased data (as a researcher), initiating calls for patient payment after data is sold, and the patient portal.
