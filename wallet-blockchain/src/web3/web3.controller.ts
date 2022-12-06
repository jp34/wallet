import { Router, Request, Response } from "express";
import MintService from "./web3.service";
import { Payload } from "../payload/payload.interface";
import StorageService from "../storage/storage.service";

export default class MintController {
    public router: Router;
    private valid_token: Boolean;
    private web3Service: MintService;
    private storageService: StorageService;

    constructor() {
        this.router = Router();
        this.valid_token = false;
        this.web3Service = new MintService();
        this.storageService = new StorageService();
        this.init();
    }

    private init() {
        this.router.get("/", this.getAll);
        this.router.post("/", this.create);
        this.router.get("/:id", this.getOne);
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

    public create = async (request: Request, response: Response) => {
        let payload: Payload = request.body.payload;
        if (payload == undefined) {
            response.status(400).json({
                status: "failed",
                error: "Missing payload"
            });
            return;
        }

        // Store payload data on IPFS
        console.log(`Storing payload: ${JSON.stringify(payload)}`);
        let cid = await this.storageService.upload([payload]);

        // Deploy payload to ethereum
        console.log(`Deploying new payload: ${JSON.stringify(payload)}`);
        let result = await this.web3Service.deploy(payload);

        response.status(200).json({
            status: "success",
            transaction: {
                storage: {
                    cid: cid
                },
                deploy: {
                    address: result.options.address
                }
            }
        });
    };
}
