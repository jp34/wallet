import { Request, Response, NextFunction } from "express";
import UploadService from "../service/upload.service";

export default class UploadController {

    private uploadService: UploadService;

    constructor() {
        this.uploadService = new UploadService();
    }

    public create = async (request: Request, response: Response, next: NextFunction) => {

    }
}
