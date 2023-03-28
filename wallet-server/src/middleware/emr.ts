import { Request, Response, NextFunction } from "express";
import logger from "../util/logger";

export const generateEmr = async (request: Request, response: Response, next: NextFunction) => {
    logger.info("Generating emr...");
    await new Promise(f => setTimeout(f, 2000));
    logger.info("Done...");
    next();
}
