import bcrypt from "bcrypt";
import { Request, Response, NextFunction } from "express";
import {
    findUserExistsByEmail,
    findUserExistsByEnsAddress,
    createUser,
    findUserByEmail
} from "../service/user.service";
import {
    generateAccessToken,
    generateRefreshToken,
    refreshAccessToken
} from "../service/auth.service";
import { CreateUserRequest } from "../util/io/user.io";

export default class AuthController {

    public signup = async (request: CreateUserRequest, response: Response, next: NextFunction) => {
        try {
            const data = request.body.data;
            if (!data) throw new Error("Invalid request body provided");
            if (!data.email) throw new Error("Missing or invalid input provided: email");
            if (!data.ensAddress) throw new Error("Missing or invalid input provided: ensAddress");
            if (!data.password) throw new Error("Missing or invalid input provided: password");

            // Verify username not taken
            const existsByEmail = await findUserExistsByEmail(data.email);
            if (existsByEmail) throw new Error(`User already exists with email: ${data.email}`);
            
            // Verify username not taken
            const existsByEns = await findUserExistsByEnsAddress(data.ensAddress);
            if (existsByEns) throw new Error(`User already exists with ens: ${data.ensAddress}`);
            
            const user = await createUser(data.email, data.ensAddress, data.password);

            return response.status(200).json({
                status: "success",
                data: user,
                tokens: {
                    access: generateAccessToken(user.id),
                    refresh: generateRefreshToken(user.id)
                }
            });
        } catch (err: any) {
            return next(err);
        }
    }

    public login = async (request: Request, response: Response, next: NextFunction) => {
        try {
            const data = request.body.data;
            if (!data) throw new Error("Invalid request body provided");
            if (!data.email) throw new Error("Missing or invalid input provided: email");
            if (!data.password) throw new Error("Missing or invalid input provided: password");

            // Find the requested user
            const user = await findUserByEmail(data.email);
            if (!user) throw new Error(`User does not exist with email: ${data.email}`);
            
            // Validate the provided password
            const result = await bcrypt.compare(data.password, user.password);
            if (!result) throw new Error(`Invalid credentials provided`);
            
            return response.status(200).json({
                status: "success",
                data: user,
                tokens: {
                    access: generateAccessToken(user.id),
                    refresh: generateRefreshToken(user.id)
                }
            });
        } catch (err: any) {
            return next(err);
        }
    }

    public refresh = async (request: Request, response: Response, next: NextFunction) => {
        try {
            if (!request.body.refresh) throw new Error("Missing or invalid input provided: refresh");
            const access = refreshAccessToken(request.body.refresh);
            return response.status(200).json({ status: "success", tokens: { access: access }});
        } catch (err: any) {
            return next(err);
        }
    }
}
