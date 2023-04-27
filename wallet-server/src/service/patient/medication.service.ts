import prisma from "../../config/db";
import { CreatePatientMedication } from "../../models/io";

export const createPatientMedication = async (
    patient: number,
    name: string,
    dosage: string,
    frequency: string,
    date: string
) => {
    return await prisma.patientMedication.create({
        data: {
            patientId: patient,
            name: name,
            dosage: dosage,
            frequency: frequency,
            date: date
        }
    });
}

export const createPatientMedications = async (patient: number, medications: CreatePatientMedication[]) => {
    medications.forEach(async (medication) => {
        await createPatientMedication(
            patient,
            medication.name,
            medication.dosage,
            medication.frequency,
            medication.date
        );
    });
    return await prisma.patientMedication.findMany({
        where: {
            patientId: patient
        }
    });
}

export const findPatientMedications = async (id: number) => {
    return await prisma.patientMedication.findMany({
        where: {
            patientId: id
        }
    });
}

export const findPatientMedication = async (id: number, name: string) => {
    return await prisma.patientMedication.findUnique({
        where: {
            patientId_name: {
                patientId: id,
                name: name
            }
        }
    });
}

export const updatePatientMedicationDosage = async (id: number, name: string, dosage: string) => {
    return await prisma.patientMedication.update({
        where: {
            patientId_name: {
                patientId: id,
                name: name
            }
        },
        data: {
            dosage: dosage,
            modified: Date.now().toString()
        }
    });
}

export const updatePatientMedicationFrequency = async (id: number, name: string, frequency: string) => {
    return await prisma.patientMedication.update({
        where: {
            patientId_name: {
                patientId: id,
                name: name
            }
        },
        data: {
            frequency: frequency,
            modified: Date.now().toString()
        }
    });
}

export const deletePatientMedication = async (id: number, name: string) => {
    return await prisma.patientMedication.delete({
        where: {
            patientId_name: {
                patientId: id,
                name: name
            }
        }
    });
}
