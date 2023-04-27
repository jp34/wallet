import { Request, Response, NextFunction } from "express";
import { findAdvertisements, findProducts, findProduct, purchaseProduct, findPaymentSum } from "../service/product/product.service";

export default class MarketController {

    // Product Endpoints

    public getProducts = async (request: Request, response: Response, next: NextFunction) => {
        findProducts().then(data => {
            response.status(200).json({ status: "success", data: data });
        }).catch(next)
    }

    public getProduct = async (request: Request, response: Response, next: NextFunction) => {
        if (!request.params.id) throw new Error("Missing or invalid input provided: id");
        findProduct(parseInt(request.params.id)).then(data => {
            response.status(200).json({ status: "success", data: data });
        }).catch(next);
    }

    public purchaseProduct = async (request: Request, response: Response, next: NextFunction) => {
        const id = request.body.data.id;
        const buyer = request.body.data.buyer;
        purchaseProduct(parseInt(id), buyer).then(data => {
            response.status(200).json({ status: "success", data: data });
        }).catch(next);
    }

    // Advertisement Endpoints

    public getAdvertisements = async (request: Request, response: Response, next: NextFunction) => {
        findAdvertisements().then(data => {
            response.status(200).json({ status: "success", data: data });
        }).catch(next);
    }

    // Payment Endpoints

    public getPaymentSum = async (request: Request, response: Response, next: NextFunction) => {
        const id = request.params.id;
        findPaymentSum(parseInt(id)).then(data => {
            response.status(200).json({ status: "success", data: data });
        }).catch(next);
    }
}
