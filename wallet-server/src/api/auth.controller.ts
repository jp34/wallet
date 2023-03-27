import bcrypt from "bcrypt";
import { Request, Response, NextFunction } from "express";
import {
    findUserExistsByUsername,
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

export default class AuthController {

    public signup = async (request: Request, response: Response, next: NextFunction) => {
        try {
            if (!request.body.username) throw new Error("Missing or invalid input provided: username");
            if (!request.body.email) throw new Error("Missing or invalid input provided: email");
            if (!request.body.ensAddress) throw new Error("Missing or invalid input provided: ensAddress");
            if (!request.body.password) throw new Error("Missing or invalid input provided: password");
            if (await findUserExistsByUsername(request.body.username))
                throw new Error(`User already exists with username: ${request.body.username}`);
            if (await findUserExistsByEmail(request.body.email))
                throw new Error(`User already exists with email: ${request.body.email}`);
            if (await findUserExistsByEnsAddress(request.body.ensAddress))
                throw new Error(`User already exists with email: ${request.body.ensAddress}`);
            const user = await createUser(
                request.body.username,
                request.body.email,
                request.body.ensAddress,
                request.body.password
            );
            const tokens = {
                access: generateAccessToken(user.id),
                refresh: generateRefreshToken(user.id)
            };
            return response.status(200).json({ status: "success", data: user, tokens: tokens });
        } catch (err: any) {
            return next(err);
        }
    }

    public login = async (request: Request, response: Response, next: NextFunction) => {
        try {
            if (!request.body.email) throw new Error("Missing or invalid input provided: email");
        if (!request.body.password) throw new Error("Missing or invalid input provided: password");
            const user = await findUserByEmail(request.body.email);
            if (!user) throw new Error(`User does not exist with email: ${request.body.email}`);
            const result = await bcrypt.compare(request.body.password, user.password);
            if (!result) throw new Error(`Invalid credentials provided`);
            const tokens = {
                access: generateAccessToken(user.id),
                refresh: generateRefreshToken(user.id)
            };
            return response.status(200).json({ status: "success", tokens: tokens });
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
