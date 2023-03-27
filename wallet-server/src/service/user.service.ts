import bcrypt from "bcrypt";
import prisma from "../config/db";

export const createUser = async (
    username: string,
    email: string,
    ensAddress: string,
    password: string
) => {
    const hashed = bcrypt.hashSync(password, bcrypt.genSaltSync());
    return await prisma.user.create({
        data: {
            username: username,
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

export const findUserExistsByUsername = async (username: string) => {
    const count = await prisma.user.count({
        where: {
            username: username
        }
    });
    return count > 0;
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

export const updateUser = async (id: number, data: Object) => {
    return await prisma.user.update({
        where: {
            id: id
        },
        data: data
    });
}

export const deleteUser = async (id: number) => {
    return await prisma.user.delete({
        where: {
            id: id
        }
    });
}
