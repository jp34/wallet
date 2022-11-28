import { Router, Request, Response } from "express";
import {
    Payload,
    PayloadMeta,
    PayloadContent,
} from "../storage/storage.interface";

export default class MintController {
    public router: Router;
    private token: string;
    private valid_token: Boolean;

    constructor() {
        this.router = Router();
        this.token = process.env.API_TOKEN_IPFS ?? "Undefined";
        this.valid_token = false;
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

    public create = (request: Request, response: Response) => {
        let payload: Payload = request.body.payload;
        let meta: PayloadMeta = payload.meta;
        let content: PayloadContent = payload.content;

        // Store payload on ipfs

        // Start lazy minting process

        response.status(200).json({ status: "success" });
    };
}
