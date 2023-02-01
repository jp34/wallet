import { Request, Response, NextFunction } from "express";
import { Payload } from "../model/payload.interface";
import IpfsService from "../service/ipfs.service";

export default class IpfsController {
    
    private service: IpfsService;

    constructor() {
        this.service = new IpfsService();
    }

    /**
     * This method uploads new files to IPFS and returns a content id
     * @param request Http request
     * @param response Http response
     * @param next Next middleware function
     * @returns Content ID from successful upload
     */
    public create = async (request: Request, response: Response, next: NextFunction) => {
        try {
            const files: Payload[] = request.body.files;
            const cid = await this.service.upload(files);
            return response.status(200).json({ cid: cid });
        } catch (error: any) {
            console.log("Failed to upload ipfs document");
            console.log(error);
            return next(error);
        }
    };

    /**
     * This method returns all files stored in IPFS
     * @param request Http request
     * @param response Http response
     * @param next Next middleware function
     * @returns Files from IPFS
     */
    public getAll = async (request: Request, response: Response, next: NextFunction) => {
        try {
            const files = await this.service.getAll();
            return response.status(200).json({ files: files });
        } catch (error: any) {
            console.log("Failed to fetch ipfs documents");
            console.log(error);
            return next(error);
        }
    };

    /**
     * This method returns a single file from IPFS, located by a content id
     * @param request Http request
     * @param response Http response
     * @param next Next middleware function
     * @returns File from IPFS
     */
    public getOne = async (request: Request, response: Response, next: NextFunction) => {
        try {
            const id = request.params.id.toString();
            const file = await this.service.getOne(id);
            return response.status(200).json({ file: file });
        } catch (error: any) {
            console.log(`Failed to fetch ipfs document `);
            console.log(error);
            return next(error);
        }
    };
}
