"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class IpfsController {
    constructor() {
        var _a;
        /*
            Expects an HTTP request with a list of JSON documents within the request body. Documents should be formatted as such:
            {
                "id": ""
                content: {}
            }
        */
        this.storeDocument = (request, response) => {
            if (!this.valid_token) {
                response.send(500);
            }
            let documents = request.body.documents;
            console.log("Files to upload:");
            for (let document of documents) {
                console.log(document.id);
            }
            // console.log("Initializing web3.storage client...");
            // const storage = new Web3Storage({ token: this.token });
            response.status(200).json({ status: "success" });
        };
        this.router = (0, express_1.Router)();
        this.token = (_a = process.env.API_TOKEN_IPFS) !== null && _a !== void 0 ? _a : "Undefined";
        this.valid_token = false;
        this.validateToken();
        this.init();
    }
    validateToken() {
        if (this.token === "Undefined") {
            console.error("Missing token: API_TOKEN_IPFS (Should be defined in a .env file)");
        }
        else {
            this.valid_token = true;
        }
    }
    init() {
        this.router.post("/store", this.storeDocument);
    }
}
exports.default = IpfsController;
