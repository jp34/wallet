import { Request, Response, NextFunction } from "express";
import logger from "../../config/logger";
import ProductFactory from "../product/ProductFactory";

export const syncProduct = async (request: Request, response: Response, next: NextFunction) => {
    logger.info("here");
    const id = parseInt(request.params.id);
    if (!id) throw new Error("Unable to retrieve id from url params");
    if (response.statusCode != 200) return next();
    logger.info(`Generating new product for patient: ${id}`);
    new ProductFactory().generate(id);
    next();
}
