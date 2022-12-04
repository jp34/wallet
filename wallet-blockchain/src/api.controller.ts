import { Router } from "express";
import StorageController from "./storage/storage.controller";
import MintController from "./web3/web3.controller";

export default class ApiController {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.use("/web3", new MintController().router);
        this.router.use("/web3/storage", new StorageController().router);
    }
}
