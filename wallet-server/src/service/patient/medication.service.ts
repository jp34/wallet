import prisma from "../../config/db";

export const createPatientMedication = async (
    patient: number,
    name: string,
    dosage: string,
    frequency: string
) => {
    return await prisma.patientMedication.create({
        data: {
            patientId: patient,
            name: name,
            dosage: dosage,
            frequency: frequency
        }
    });
}

export const findPatientMedications = async () => {
    return await prisma.patientMedication.findMany();
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
