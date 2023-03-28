import { Request, Response, NextFunction } from "express";
import { CreatePatientMedicationRequest, UpdatePatientMedicationRequest } from "../../util/io/patient.io";
import {
    createPatientMedication,
    findPatientMedications,
    findPatientMedication,
    updatePatientMedicationDosage,
    updatePatientMedicationFrequency,
    deletePatientMedication
} from "../../service/patient/medication.service";

export default class PatientMedicationController {

    public create = async (request: CreatePatientMedicationRequest, response: Response, next: NextFunction) => {
        const id = parseInt(request.params.id);
        const data = request.body.data;
        if (!id) throw new Error("Missing or invalid input provided: id");
        if (!data) throw new Error("Invalid request body provided");
        createPatientMedication(id, data.name, data.dosage, data.frequency).then(data => {
            response.status(200).json({ status: "success", data: data });
        }).catch(next);
    }

    public getMany = async (request: Request, response: Response, next: NextFunction) => {
        findPatientMedications().then(data => {
            response.status(200).json({ status: "success", data: data });
        }).catch(next);
    }

    public getOne = async (request: Request, response: Response, next: NextFunction) => {
        const id = parseInt(request.params.id);
        const name = request.params.name;
        if (!id) throw new Error("Missing or invalid input provided: id");
        findPatientMedication(id, name).then(data => {
            response.status(200).json({ status: "success", data: data });
        }).catch(next);
    }

    public update = async (request: UpdatePatientMedicationRequest, response: Response, next: NextFunction) => {
        try {
            const id = parseInt(request.params.id);
            const name = request.params.name;
            const data = request.body.data;
            if (!id) throw new Error("Missing or invalid input provided: id");
            if (!name) throw new Error("Missing or invalid input provided: name");
            if (!data) throw new Error("Invalid request body provided");
            if (data.dosage) await updatePatientMedicationDosage(id, name, data.dosage).catch(next);
            if (data.frequency) await updatePatientMedicationFrequency(id, name, data.frequency).catch(next);
            findPatientMedication(id, name).then(data => {
                response.status(200).json({ status: "success", data: data });
            }).catch(next);
        } catch (err: any) {
            return next(err);
        }
    }

    public delete = async (request: Request, response: Response, next: NextFunction) => {
        const id = parseInt(request.params.id);
        const name = request.params.name;
        if (!id) throw new Error("Missing or invalid input provided: id");
        deletePatientMedication(id, name).then(data => {
            response.status(200).json({ status: "success", data: data });
        }).catch(next);
    }
}
