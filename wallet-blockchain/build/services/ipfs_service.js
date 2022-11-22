"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeDocument = void 0;
// Store document on IPFS
const storeDocument = (documents) => {
    let API_TOKEN_IPFS = process.env.API_TOKEN_IPFS;
    if (API_TOKEN_IPFS === "Undefined") {
        console.error("Missing token: API_TOKEN_IPFS (Should be defined in a .env file)");
        return {};
    }
    console.log(API_TOKEN_IPFS);
    console.log("Files to upload:");
    for (let document of documents) {
        console.log(document.id);
    }
    // console.log("Initializing web3.storage client...");
    // const storage = new Web3Storage({ token: API_TOKEN_IPFS });
    // console.log("Attempting to store documents...");
};
exports.storeDocument = storeDocument;
