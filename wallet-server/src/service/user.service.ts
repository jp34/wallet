import bcrypt from "bcrypt";
import prisma from "../config/db";

export const createUser = async (
    email: string,
    ensAddress: string,
    password: string
) => {
    const hashed = bcrypt.hashSync(password, bcrypt.genSaltSync());
    return await prisma.user.create({
        data: {
            email: email,
            ensAddress: ensAddress,
            password: hashed
        }
    });
}

export const findUsers = async () => {
    return await prisma.user.findMany();
}

export const findUser = async (id: number) => {
    return await prisma.user.findUnique({
        where: {
            id: id
        }
    });
}

export const findUserByEmail = async (email: string) => {
    return await prisma.user.findUnique({
        where: {
            email: email
        }
    });
}

export const findUserExistsByEmail = async (email: string) => {
    const count = await prisma.user.count({
        where: {
            email: email
        }
    });
    return count > 0;
}

export const findUserExistsByEnsAddress = async (ensAddress: string) => {
    const count = await prisma.user.count({
        where: {
            ensAddress: ensAddress
        }
    });
    return count > 0;
}

export const updateUserEmail = async (id: number, email: string) => {
    const emailExists = await findUserExistsByEmail(email);
    if (emailExists) throw new Error(`User already exists with email: ${email}`);
    return await prisma.user.update({
        where: {
            id: id
        },
        data: {
            email: email
        }
    });
}

export const updateUserEnsAddress = async (id: number, address: string) => {
    const addressExists = await findUserExistsByEnsAddress(address);
    if (addressExists) throw new Error(`User already exists with ensAddress: ${address}`);
    return await prisma.user.update({
        where: {
            id: id
        },
        data: {
            ensAddress: address
        }
    });
}

export const updateUserPassword = async (id: number, password: string) => {
    const hashed = bcrypt.hashSync(password, bcrypt.genSaltSync());
    return await prisma.user.update({
        where: {
            id: id
        },
        data: {
            password: hashed
        }
    });
}

export const deleteUser = async (id: number) => {
    return await prisma.user.delete({
        where: {
            id: id
        }
    });
}
