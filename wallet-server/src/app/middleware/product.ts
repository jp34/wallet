import { Request, Response, NextFunction } from "express";
import { createProduct } from "../../service/product/product.service";
import logger from "../../config/logger";

export const syncProduct = async (request: Request, response: Response, next: NextFunction) => {
    logger.info("here");
    const id = parseInt(request.params.id);
    if (!id) throw new Error("Unable to retrieve id from url params");
    if (response.statusCode != 200) return next();
    logger.info(`Deteced change to patient model: Patient(${id})`);
    createProduct(id);
    next();
}
