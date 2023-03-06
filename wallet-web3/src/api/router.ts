import { Router } from "express";
import EmrController from "./emr.controller";

const router = Router();
const emr = new EmrController();

// EMR
router.get('/emr', emr.getMany);
router.get('/emr/:id', emr.getOne);
router.post('/emr', emr.create);

export default router;
