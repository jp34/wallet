import prisma from "../../config/db";

export const createMedicalEncounter = async (
    patient: number,
    date: string,
    provider: string
) => {
    return await prisma.medicalEncounter.create({
        data: {
            patientId: patient,
            date: date,
            provider: provider
        }
    });
}

export const findMedicalEncounters = async () => {
    return await prisma.medicalEncounter.findMany();
}

export const findMedicalEncounter = async (id: number, date: string) => {
    return await prisma.medicalEncounter.findUnique({
        where: {
            patientId_date: {
                patientId: id,
                date: date
            }
        }
    });
}

export const updateMedicalEncounterProvider = async (id: number, date: string, provider: string) => {
    return await prisma.medicalEncounter.update({
        where: {
            patientId_date: {
                patientId: id,
                date: date
            }
        },
        data: {
            provider: provider,
            modified: Date.now().toString()
        }
    });
}

export const deleteMedicalEncounter = async (id: number, date: string) => {
    return await prisma.medicalEncounter.delete({
        where: {
            patientId_date: {
                patientId: id,
                date: date
            }
        }
    });
}
