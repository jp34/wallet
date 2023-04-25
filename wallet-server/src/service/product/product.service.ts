import prisma from "../../config/db";
import logger from "../../util/logger";
import { findPatientAllergies } from "../patient/allergy.service";
import { findMedicalEncounters } from "../patient/encounter.service";
import { findPatientMedications } from "../patient/medication.service";
import { upload } from "./ipfs.service";
import { ContractHandler } from '../../../scripts/ContractHandlerTS'
import  { ethers }  from "ethers";

export const findProducts = async () => {
    return await prisma.product.findMany();
}

export const findProduct = async (cid: string) => {
    return await prisma.product.findUnique({
        where: {
            cid: cid
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
        const contractHandler: ContractHandler = new ContractHandler();
        const uri = 'ipfs://' + cid;
        const price: ethers.BigNumberish = ethers.parseEther('1');
        const voucher = contractHandler.makeVoucher(patient.id, uri, price);
        // Store new product
        const receipt = await prisma.product.create({
            data: {
                cid: cid,
                subjectId: patient.id,
            }
        });
        if (!receipt) throw new Error("Unable to store EMR transaction receipt");
        return true;
    } catch (err: any) {
        logger.warn(`EMR generation for Patient(${id}) produced error: ${err.message}`);
        throw err;
    }
}
