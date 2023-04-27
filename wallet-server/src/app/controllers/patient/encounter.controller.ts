import { Request, Response, NextFunction } from "express";
import { CreateManyMedicalEncounterRequest, UpdateMedicalEncounterRequest } from "../../../config/io";
import {
    createMedicalEncounters,
    findMedicalEncounter,
    findMedicalEncounters,
    updateMedicalEncounterProvider,
    deleteMedicalEncounter
} from "../../../service/patient/encounter.service";

export default class MedicalEncounterController {

    public create = async (request: CreateManyMedicalEncounterRequest, response: Response, next: NextFunction) => {
        const id = parseInt(request.params.id);
        const data = request.body.data;
        if (!id) throw new Error("Missing or invalid input provided: id");
        if (!data) throw new Error("Invalid request body provided");
        createMedicalEncounters(id, data).then(data => {
            response.status(200).json({ status: "success", data: data });
            next();
        }).catch(next);
    }

    public getMany = async (request: Request, response: Response, next: NextFunction) => {
        const id = parseInt(request.params.id);
        if (!id) throw new Error("Missing or invalid input provided: id");
        findMedicalEncounters(id).then(data => {
            response.status(200).json({ status: "success", data: data });
        }).catch(next);
    }

    public getOne = async (request: Request, response: Response, next: NextFunction) => {
        const id = parseInt(request.params.id);
        const date = request.params.date;
        if (!id) throw new Error("Missing or invalid input provided: id");
        findMedicalEncounter(id, date).then(data => {
            response.status(200).json({ status: "success", data: data });
        }).catch(next);
    }

    public update = async (request: UpdateMedicalEncounterRequest, response: Response, next: NextFunction) => {
        try {
            const id = parseInt(request.params.id);
            const date = request.params.date;
            const data = request.body.data;
            if (!id) throw new Error("Missing or invalid input provided: id");
            if (!date) throw new Error("Missing or invalid input provided: name");
            if (!data) throw new Error("Invalid request body provided");
            if (data.provider) await updateMedicalEncounterProvider(id, date, data.provider).catch(next);
            findMedicalEncounter(id, date).then(data => {
                response.status(200).json({ status: "success", data: data });
                next();
            }).catch(next);
        } catch (err: any) {
            return next(err);
        }
    }

    public delete = async (request: Request, response: Response, next: NextFunction) => {
        const id = parseInt(request.params.id);
        const date = request.params.date;
        if (!id) throw new Error("Missing or invalid input provided: id");
        deleteMedicalEncounter(id, date).then(data => {
            response.status(200).json({ status: "success", data: data });
            next();
        }).catch(next);
    }
}
