import { Request, Response, NextFunction } from "express";
import { findAdvertisements, findProducts } from "../service/product/product.service";

export default class MarketController {

    public getProducts = async (request: Request, response: Response, next: NextFunction) => {
        findProducts().then(data => {
            response.status(200).json({ status: "success", data: data });
        }).catch(next)
    }

    public getAdvertisements = async (request: Request, response: Response, next: NextFunction) => {
        findAdvertisements().then(data => {
            response.status(200).json({ status: "success", data: data });
        }).catch(next);
    }
}
