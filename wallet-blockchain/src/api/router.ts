import { Router } from "express";
import IpfsController from "./ipfs.controller";
import Web3Controller from "./web3.controller";
import UploadController from "./upload.controller";

const router = Router();
const ipfsController = new IpfsController();
const web3Controller = new Web3Controller();
const uploadController = new UploadController();

// IPFS
router.get('/ipfs/files', ipfsController.getAll);
router.get('/ipfs/files/:id', ipfsController.getOne);

// Web3

// Upload
router.post("upload/", uploadController.create);

export default router;
