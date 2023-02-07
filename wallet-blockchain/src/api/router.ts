import { Router } from "express";
import IpfsController from "./ipfs.controller";
import Web3Controller from "./web3.controller";

const router = Router();
const ipfsController = new IpfsController();
const web3Controller = new Web3Controller();

// IPFS
router.get('/ipfs/files', ipfsController.getAll);
router.get('/ipfs/files/:id', ipfsController.getOne);

// Web3
router.get("/web3", web3Controller.getAll);
router.get("/web3/:id", web3Controller.getOne);
router.post("/web3", web3Controller.create);

export default router;
