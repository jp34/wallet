import { Router } from "express";
import StorageController from "./storage/storage.controller";
import MintController from "./mint/mint.controller";

export default class ApiController {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.use("/storage", new StorageController().router);
        this.router.use("/mint", new MintController().router);
    }
}
