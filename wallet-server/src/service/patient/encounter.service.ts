import prisma from "../../config/db";
import { CreateMedicalEncounter } from "../../models/io";

export const createMedicalEncounter = async (
    patient: number,
    reason: string,
    provider: string
) => {
    return await prisma.medicalEncounter.create({
        data: {
            patientId: patient,
            reason: reason,
            provider: provider
        }
    });
}

export const createMedicalEncounters = async (patient: number, encounters: CreateMedicalEncounter[]) => {
    encounters.forEach(async (encounter) => {
        await createMedicalEncounter(patient, encounter.reason, encounter.provider);
    });
    return await prisma.medicalEncounter.findMany({
        where: {
            patientId: patient
        }
    });
}

export const findMedicalEncounters = async (id: number) => {
    return await prisma.medicalEncounter.findMany({
        where: {
            patientId: id
        }
    });
}

export const findMedicalEncounter = async (id: number, reason: string) => {
    return await prisma.medicalEncounter.findUnique({
        where: {
            patientId_reason: {
                patientId: id,
                reason: reason
            }
        }
    });
}

export const updateMedicalEncounterProvider = async (id: number, reason: string, provider: string) => {
    return await prisma.medicalEncounter.update({
        where: {
            patientId_reason: {
                patientId: id,
                reason: reason
            }
        },
        data: {
            provider: provider,
            modified: Date.now().toString()
        }
    });
}

export const deleteMedicalEncounter = async (id: number, reason: string) => {
    return await prisma.medicalEncounter.delete({
        where: {
            patientId_reason: {
                patientId: id,
                reason: reason
            }
        }
    });
}
