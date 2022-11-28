import { Router, Request, Response } from "express";
import { Web3Storage } from "web3.storage";
import Document from "./document.interface";

export default class IpfsController {
    public router: Router;
    private token: string;
    private valid_token: Boolean;

    constructor() {
        this.router = Router();
        this.token = process.env.API_TOKEN_IPFS ?? "Undefined";
        this.valid_token = false;
        this.validateToken();
        this.init();
    }

    private validateToken() {
        if (this.token === "Undefined") {
            console.error(
                "Missing token: API_TOKEN_IPFS (Should be defined in a .env file)"
            );
        } else {
            this.valid_token = true;
        }
    }

    private init() {
        this.router.get("/api/ipfs/", this.getAll);
        this.router.get("/:id", this.getOne);
        this.router.post("/", this.create);
    }

    // ENDPOINTS

    public getAll = (request: Request, response: Response) => {
        if (!this.valid_token) {
            response.send(500);
        }
        response.status(200).json({ status: "success" });
    };

    public getOne = (request: Request, response: Response) => {
        if (!this.valid_token) {
            response.send(500);
        }
        let id = request.params.id;
        response.status(200).json({ status: "success", id: id });
    };

    /*
        Expects an HTTP request with a list of JSON documents within the request body. Documents should be formatted as such:
        {
            "id": ""
            content: {}
        }
    */
    public create = (request: Request, response: Response) => {
        if (!this.valid_token) {
            response.send(500);
        }
        let documents: Document[] = request.body.documents;
        console.log("Files to upload:");
        for (let document of documents) {
            console.log(document.id);
        }
        // console.log("Initializing web3.storage client...");
        // const storage = new Web3Storage({ token: this.token });
        response.status(200).json({ status: "success" });
    };
}
