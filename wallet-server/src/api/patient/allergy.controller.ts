import { Request, Response, NextFunction } from "express";
import { CreatePatientAllergyRequest, UpdatePatientAllergyRequest } from "../../util/io/patient.io";
import {
    createPatientAllergy,
    findPatientAllergies,
    findPatientAllergy,
    updatePatientAllergySeverity,
    deletePatientAllergy
} from "../../service/patient/allergy.service";

export default class PatientAllergyController {

    public create = async (request: CreatePatientAllergyRequest, response: Response, next: NextFunction) => {
        const id = parseInt(request.params.id);
        const data = request.body.data;
        if (!id) throw new Error("Missing or invalid input provided: id");
        if (!data) throw new Error("Invalid request body provided");
        createPatientAllergy(id, data.name, data.severity).then(data => {
            response.status(200).json({ status: "success", data: data });
            next();
        }).catch(next);
    }

    public getMany = async (request: Request, response: Response, next: NextFunction) => {
        findPatientAllergies().then(data => {
            response.status(200).json({ status: "success", data: data });
        }).catch(next);
    }

    public getOne = async (request: Request, response: Response, next: NextFunction) => {
        const id = parseInt(request.params.id);
        const name = request.params.name;
        if (!id) throw new Error("Missing or invalid input provided: id");
        findPatientAllergy(id, name).then(data => {
            response.status(200).json({ status: "success", data: data });
        }).catch(next);
    }

    public update = async (request: UpdatePatientAllergyRequest, response: Response, next: NextFunction) => {
        try {
            const id = parseInt(request.params.id);
            const name = request.params.name;
            const data = request.body.data;
            if (!id) throw new Error("Missing or invalid input provided: id");
            if (!name) throw new Error("Missing or invalid input provided: name");
            if (!data) throw new Error("Invalid request body provided");
            if (data.severity) await updatePatientAllergySeverity(id, name, data.severity).catch(next);
            findPatientAllergy(id, name).then(data => {
                response.status(200).json({ status: "success", data: data });
                next();
            }).catch(next);
        } catch (err: any) {
            return next(err);
        }
    }

    public delete = async (request: Request, response: Response, next: NextFunction) => {
        const id = parseInt(request.params.id);
        const name = request.params.name;
        if (!id) throw new Error("Missing or invalid input provided: id");
        deletePatientAllergy(id, name).then(data => {
            response.status(200).json({ status: "success", data: data });
            next();
        }).catch(next);
    }
}
