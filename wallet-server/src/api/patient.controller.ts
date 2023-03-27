import { Request, Response, NextFunction } from "express";
import { CreatePatientRequest, UpdatePatientRequest } from "../util/io";
import {
    createPatient,
    findPatients,
    findPatient,
    updatePatientFirstName,
    updatePatientMiddleName,
    updatePatientLastName,
    updatePatientBirthday,
    deletePatient
} from "../service/patient.service";

export default class PatientController {

    public create = async (request: CreatePatientRequest, response: Response, next: NextFunction) => {
        const data = request.body.data;
        if (!data) throw new Error("Invalid request body provided");
        createPatient(
            data.id, data.firstName, data.middleName, data.lastName, data.birthday,
        ).then(data => {
            response.status(200).json({ status: "success", data: data });
        }).catch(next);
    }

    public getMany = async (request: Request, response: Response, next: NextFunction) => {
        findPatients().then(data => {
            response.status(200).json({ status: "success", data: data });
        }).catch(next);
    }

    public getOne = async (request: Request, response: Response, next: NextFunction) => {
        if (!request.params.id) throw new Error("Missing or invalid input provided: id");
        findPatient(parseInt(request.params.id)).then(data => {
            response.status(200).json({ status: "success", data: data });
        }).catch(next);
    }

    public update = async (request: UpdatePatientRequest, response: Response, next: NextFunction) => {
        try {
            const data = request.body.data;
            if (!data) throw new Error("Invalid request body provided");
            if (data.firstName) updatePatientFirstName(data.id, data.firstName).catch(next);
            if (data.middleName) updatePatientMiddleName(data.id, data.middleName).catch(next);
            if (data.lastName) updatePatientLastName(data.id, data.lastName).catch(next);
            if (data.birthday) updatePatientBirthday(data.id, data.birthday).catch(next);
            findPatient(data.id).then(data => {
                response.status(200).json({ status: "success", data: data });
            }).catch(next);
        } catch (err: any) {
            return next(err);
        }
    }

    public delete = async (request: Request, response: Response, next: NextFunction) => {
        if (!request.params.id) throw new Error("Missing or invalid input provided: id");
        deletePatient(parseInt(request.params.id)).then(data => {
            response.status(200).json({ status: "success", data: data });
        }).catch(next);
    }
}
