import { Router, Request, Response } from "express";
import { Payload } from "../model/payload.interface";
import IpfsService from "../service/ipfs.service";
import Web3Service from "../service/web3.service";

export default class Web3Controller {
    public router: Router;
    private valid_token: Boolean;
    private web3Service: Web3Service;
    private ipfsService: IpfsService;

    constructor() {
        this.router = Router();
        this.valid_token = false;
        this.web3Service = new Web3Service();
        this.ipfsService = new IpfsService();
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
        let cid = await this.ipfsService.upload([payload]);

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
