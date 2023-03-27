import { Request, Response, NextFunction } from "express";
import {
    findUsers,
    findUser,
    updateUser,
    deleteUser
} from "../service/user.service";

export default class UserController {

    public getMany = async (request: Request, response: Response, next: NextFunction) => {
        findUsers().then(data => {
            response.status(200).json({ status: "success", data: data });
        }).catch(next);
    }
    
    public getOne = async (request: Request, response: Response, next: NextFunction) => {
        if (!request.params.id) throw new Error("Missing or invalid input provided: id");
        findUser(parseInt(request.params.id)).then(data => {
            response.status(200).json({ status: "success", data: data });
        }).catch(next);
    }

    public update = async (request: Request, response: Response, next: NextFunction) => {

    }

    public delete = async (request: Request, response: Response, next: NextFunction) => {
        if (!request.params.id) throw new Error("Missing or invalid input provided: id");
        deleteUser(parseInt(request.params.id)).then(data => {
            response.status(200).json({ status: "success", data: data });
        }).catch(next);
    }
}
