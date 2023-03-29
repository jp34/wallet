import { Request, Response, NextFunction } from "express";

export default class WalletController {

    /**
     * Create a new metamask wallet for specific user
     * @param request Request object
     * @param response Response Object
     * @param next Next middleware function
     */
    public create = async (request: Request, response: Response, next: NextFunction) => {

    }

    public getOwnedNFTs = async (request: Request, response: Response, next: NextFunction) => {

    }
}