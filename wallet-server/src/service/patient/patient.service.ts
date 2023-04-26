import prisma from "../../config/db";

export const createPatient = async (
    id: number,
    firstName: string,
    middleName: string,
    lastName: string,
    birthday: string,
) => {
    return await prisma.patient.create({
        data: {
            id: id,
            firstName: firstName,
            middleName: middleName,
            lastName: lastName,
            birthday: birthday
        }
    });
}

export const findPatients = async () => {
    return await prisma.patient.findMany({
        include: { medications: true, allergies: true, encounters: true }
    });
}

export const findPatient = async (id: number) => {
    return await prisma.patient.findUnique({
        where: { id: id },
        include: { medications: true, allergies: true, encounters: true }
    })
}

export const updatePatientFirstName = async (id: number, name: string) => {
    return await prisma.patient.update({
        where: {
            id: id
        },
        data: {
            firstName: name,
            modified: new Date(Date.now())
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
            modified: new Date(Date.now())
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
            modified: new Date(Date.now())
        }
    });
}

export const updatePatientBirthday = async (id: number, birthday: string) => {
    return await prisma.patient.update({
        where: {
            id: id
        },
        data: {
            birthday: birthday,
            modified: new Date(Date.now())
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
