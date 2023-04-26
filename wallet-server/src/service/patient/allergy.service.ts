import prisma from "../../config/db";
import { CreatePatientAllergy } from "../../util/io/patient.io";

export const createPatientAllergy = async (
    patient: number,
    name: string,
    severity: string
) => {
    return await prisma.patientAllergy.create({
        data: {
            patientId: patient,
            name: name,
            severity: severity,
        }
    });
}

export const createPatientAllergies = async (patient: number, allergies: CreatePatientAllergy[]) => {
    allergies.forEach(async (allergy) => {
        await createPatientAllergy(patient, allergy.name, allergy.severity);
    });
    return await prisma.patientAllergy.findMany({
        where: {
            patientId: patient
        }
    });
}

export const findPatientAllergies = async (id: number) => {
    return await prisma.patientAllergy.findMany({
        where: {
            patientId: id
        }
    });
}

export const findPatientAllergy = async (id: number, name: string) => {
    return await prisma.patientAllergy.findUnique({
        where: {
            patientId_name: {
                patientId: id,
                name: name
            }
        }
    });
}

export const updatePatientAllergySeverity = async (id: number, name: string, severity: string) => {
    return await prisma.patientAllergy.update({
        where: {
            patientId_name: {
                patientId: id,
                name: name
            }
        },
        data: {
            severity: severity,
            modified: Date.now().toString()
        }
    });
}

export const deletePatientAllergy = async (id: number, name: string) => {
    return await prisma.patientAllergy.delete({
        where: {
            patientId_name: {
                patientId: id,
                name: name
            }
        }
    });
}
