import { Router } from "express";
import IpfsController from "./ipfs/ipfs.controller";
import BlockController from "./block/block.controller";

export default class ApiController {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.use("/ipfs", new IpfsController().router);
        this.router.use("/block", new BlockController().router);
    }
}
