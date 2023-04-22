import { Request, Response, NextFunction } from "express";
import { CreatePatientRequest, UpdatePatientRequest } from "../../util/io/patient.io";
import {
    createPatient,
    findPatients,
    findPatient,
    updatePatientFirstName,
    updatePatientMiddleName,
    updatePatientLastName,
    updatePatientBirthday,
    deletePatient
} from "../../service/patient/patient.service";

export default class PatientController {

    public create = async (request: CreatePatientRequest, response: Response, next: NextFunction) => {
        const id = parseInt(request.params.id);
        const data = request.body.data;
        if (!data) throw new Error("Invalid request body provided");
        createPatient(id, data.firstName, data.middleName, data.lastName, data.birthday).then(data => {
            response.status(200).json({ status: "success", data: data });
            next();
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
            const id = parseInt(request.params.id);
            const data = request.body.data;
            if (!id) throw new Error("Missing or invalid input provided: id");
            if (!data) throw new Error("Invalid request body provided");
            if (data.firstName) await updatePatientFirstName(id, data.firstName).catch(next);
            if (data.middleName) await updatePatientMiddleName(id, data.middleName).catch(next);
            if (data.lastName) await updatePatientLastName(id, data.lastName).catch(next);
            if (data.birthday) await updatePatientBirthday(id, data.birthday).catch(next);
            findPatient(id).then(data => {
                response.status(200).json({ status: "success", data: data });
                next();
            }).catch(next);
        } catch (err: any) {
            return next(err);
        }
    }

    public delete = async (request: Request, response: Response, next: NextFunction) => {
        if (!request.params.id) throw new Error("Missing or invalid input provided: id");
        deletePatient(parseInt(request.params.id)).then(data => {
            response.status(200).json({ status: "success", data: data });
            next();
        }).catch(next);
    }
}
