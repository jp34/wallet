import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

const SECRET = process.env.SERVER_ACCESS_SECRET;

export const authorize = async (request: Request, response: Response, next: NextFunction) => {
    if (!SECRET) throw new Error("Missing environment variable: SERVER_ACCESS_SECRET");
    if (!request.headers.authorization) throw new Error("Missing or invalid input provided: authorization");
    const token = request.headers.authorization.split(' ')[1];
    if (!token) throw new Error("Missing or invalid input provided: authorization");
    jwt.verify(token, SECRET, (err, decoded) => {
        if (err || !decoded || typeof decoded == "string") {
            response.status(406).json({ status: "error", error: "Invalid or malformed access token provided"});
        } else {
            request.user = { id: decoded.id };
        }
    });
    next();
}
