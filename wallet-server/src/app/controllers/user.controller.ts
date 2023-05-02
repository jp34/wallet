import { Request, Response, NextFunction } from "express";
import {
    findUsers,
    findUser,
    updateUserEmail,
    updateUserEnsAddress,
    updateUserPassword,
    deleteUser
} from "../../service/user.service";
import { UpdateUserRequest } from "../../config/io";

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

    public update = async (request: UpdateUserRequest, response: Response, next: NextFunction) => {
        const id = parseInt(request.params.id);
        const data = request.body.data;
        if (!id) throw new Error("Missing or invalid input provided: id");
        if (!data) throw new Error("Invalid request body provided");
        if (data.email) await updateUserEmail(id, data.email).catch(next);
        if (data.ensAddress) await updateUserEnsAddress(id, data.ensAddress).catch(next);
        if (data.password) await updateUserPassword(id, data.password).catch(next);
        findUser(id).then(data => {
            response.status(200).json({ status: "success", data: data });
        }).catch(next);
    }

    public delete = async (request: Request, response: Response, next: NextFunction) => {
        if (!request.params.id) throw new Error("Missing or invalid input provided: id");
        deleteUser(parseInt(request.params.id)).then(data => {
            response.status(200).json({ status: "success", data: data });
        }).catch(next);
    }
}
