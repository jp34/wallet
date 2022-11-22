import { Router } from "express";
import IpfsController from "./ipfs/ipfs.controller";

export default class ApiController {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.use("/ipfs", new IpfsController().router);
    }
}
