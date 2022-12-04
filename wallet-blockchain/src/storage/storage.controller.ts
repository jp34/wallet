import { Router, Request, Response } from "express";
import { Payload } from "../payload/payload.interface";
import StorageService from "./storage.service";

export default class StorageController {
    public router: Router;
    private service: StorageService;

    constructor() {
        this.router = Router();
        this.service = new StorageService();
        this.init();
    }

    private init() {
        this.router.get("/", this.getAll);
        this.router.get("/:id", this.getOne);
        this.router.post("/", this.create);
    }

    public getAll = async (request: Request, response: Response) => {
        let uploads = await this.service.getAll();
        response.status(200).json({ status: "success", uploads: uploads });
    };

    public getOne = async (request: Request, response: Response) => {
        let id = request.params.id;
        let files = await this.service.getOne(id);
        response.status(200).json({ status: "success", files: files });
    };

    public create = async (request: Request, response: Response) => {
        let documents: Payload[] = request.body.documents;
        let cid = await this.service.upload(documents);
        response.status(200).json({ status: "success", cid: cid });
    };
}
