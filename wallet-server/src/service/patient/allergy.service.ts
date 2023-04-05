import prisma from "../../config/db";

export const createPatientAllergy = async (
    patient: number,
    name: string,
    severity: number
) => {
    return await prisma.patientAllergy.create({
        data: {
            patientId: patient,
            name: name,
            severity: severity,
        }
    });
}

export const findPatientAllergies = async () => {
    return await prisma.patientAllergy.findMany();
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

export const updatePatientAllergySeverity = async (id: number, name: string, severity: number) => {
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
