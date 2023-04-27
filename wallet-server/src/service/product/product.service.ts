import prisma from "../../config/db";
import logger from "../../util/logger";
import { findPatientAllergies } from "../patient/allergy.service";
import { findMedicalEncounters } from "../patient/encounter.service";
import { findPatientMedications } from "../patient/medication.service";
import { upload } from "./ipfs.service";
import ContractHandler from "../contract/ContractHandler";
import  { ethers }  from "ethers";

export const findProducts = async () => {
    return await prisma.product.findMany();
}

export const findProduct = async (id: number) => {
    return await prisma.product.findUnique({
        where: {
            id: id
        }
    });
}

export const findAdvertisements = async () => {
    const products = await findProducts();
    let ads = [];
    for (var i = 0; i < products.length; i++) {
        const id = products[i].subjectId;
        let tags = [];
        
        const allergies = await findPatientAllergies(id);
        for (var a = 0; a < allergies.length; a++) {
            tags.push(`${allergies[a].name} Allergy`);
        }

        const medications = await findPatientMedications(id);
        for (var a = 0; a < medications.length; a++) {
            tags.push(medications[a].name);
        }

        const encounters = await findMedicalEncounters(id);
        for (var a = 0; a < encounters.length; a++) {
            tags.push(encounters[a].reason);
        }

        ads.push({ id: products[i].id, tags });
    }
    return ads;
}

export const productExistsByCid = async (cid: string) => {
    const count = await prisma.product.count({
        where: {
            cid: cid
        }
    });
    return (count > 0);
}

const createVoucher = async (cid: string) => {
    const contractHandler: ContractHandler = new ContractHandler();
    const uri = 'ipfs://' + cid;
    const price: ethers.BigNumberish = ethers.parseEther('1');
    return await contractHandler.makeVoucher(cid, uri, price);
}

export const createProduct = async (id: number) => {
    try {
        // Fetch patient data
        const patient = await prisma.patient.findUnique({
            where: {
                id: id
            }
        });
        if (!patient) throw new Error(`Patient does not exist with id: ${id}`);
        logger.info(`Generating new EMR for patient: ${patient.id}`);

        // Send patient data to Web3-Listener
        const cid = await upload([{
            meta: {
                subject: patient.id
            },
            data: patient
        }]);

        const exists = await productExistsByCid(cid);
        if (exists) return;

        // Create NFT voucher
        const voucher = await createVoucher(cid);

        // Store new product
        const receipt = await prisma.product.create({
            data: {
                cid: cid,
                subjectId: patient.id,
                voucher: JSON.stringify(voucher)
            }
        });
        if (!receipt) throw new Error("Unable to store EMR transaction receipt");
        return true;
    } catch (err: any) {
        logger.warn(`EMR generation for Patient(${id}) produced error: ${err.message}`);
        throw err;
    }
}

export const purchaseProduct = async (id: number, buyer: string) => {
    // Mark product as purchased
    const product = await prisma.product.update({
        where: {
            id: id
        },
        data: {
            buyerAddress: buyer,
            sold: true
        }
    });

    // Create new payment object
    const fee = (product.price * 0.05);
    const payment = await prisma.payment.create({
        data: {
            subject: product.subjectId,
            amount: product.price - fee
        }
    });
    if (!payment) throw new Error("Unable to record new payment");
    return product;
}

export const findPaymentSum = async (subjectId: number) => {
    const payments = await prisma.payment.findMany({
        where: {
            subject: subjectId
        }
    });
    let sum = 0;
    for (var i = 0; i < payments.length; i++) {
        sum += payments[i].amount;
    }
    return sum;
}
