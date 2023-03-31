import { Request, Response, NextFunction } from "express";
import { findOne, findMany, upload } from "../service/ipfs.service";

export default class EmrController {

    /**
         * This method returns a single file from IPFS, located by a content id
         * @param request Http request
         * @param response Http response
         * @param next Next middleware function
         * @returns File from IPFS
         */
    public getOne = async (request: Request, response: Response, next: NextFunction) => {
        try {
            const id = request.params.id;
            const file = await findOne(id);
            return response.status(200).json({ file: file });
        } catch (error: any) {
            console.log(`Failed to fetch ipfs document `);
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
    public getMany = async (request: Request, response: Response, next: NextFunction) => {
        try {
            const files = await findMany();
            return response.status(200).json({ files: files });
        } catch (error: any) {
            console.log("Failed to fetch ipfs documents");
            console.log(error);
            return next(error);
        }
    };

    /**
     * This method uploads new files to IPFS and returns a content id
     * @param request Http request
     * @param response Http response
     * @param next Next middleware function
     * @returns Content ID from successful upload
     */
    public create = async (request: Request, response: Response, next: NextFunction) => {
        const data = request.body.data;
        upload([data]).then(data => {
            return response.status(200).json({ status: "success", cid: data });
        }).catch(next);
    };
}
