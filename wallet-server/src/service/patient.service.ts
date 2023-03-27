import prisma from "../config/db";

export const createPatient = async (
    user: number,
    firstName: string,
    middleName: string,
    lastName: string,
    birthday: Date,
) => {
    return await prisma.patient.create({
        data: {
            id: user,
            firstName: firstName,
            middleName: middleName,
            lastName: lastName,
            birthday: birthday
        }
    });
}

export const findPatients = async () => {
    return await prisma.patient.findMany();
}

export const findPatient = async (id: number) => {
    return await prisma.patient.findUnique({
        where: {
            id: id
        }
    })
}

export const updatePatientFirstName = async (id: number, name: string) => {
    return await prisma.patient.update({
        where: {
            id: id
        },
        data: {
            firstName: name,
            modified: Date.now().toString()
        }
    });
}

export const updatePatientMiddleName = async (id: number, name: string) => {
    return await prisma.patient.update({
        where: {
            id: id
        },
        data: {
            middleName: name,
            modified: Date.now().toString()
        }
    });
}

export const updatePatientLastName = async (id: number, name: string) => {
    return await prisma.patient.update({
        where: {
            id: id
        },
        data: {
            lastName: name,
            modified: Date.now().toString()
        }
    });
}

export const updatePatientBirthday = async (id: number, birthday: Date) => {
    return await prisma.patient.update({
        where: {
            id: id
        },
        data: {
            birthday: birthday,
            modified: Date.now().toString()
        }
    });
}

export const deletePatient = async (id: number) => {
    return await prisma.patient.delete({
        where: {
            id: id
        }
    });
}
