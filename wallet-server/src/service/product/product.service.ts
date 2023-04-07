import prisma from "../../config/db";
import logger from "../../util/logger";
import { uploadDocument } from "./ipfs.service";

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
        const cid = await uploadDocument([{
            meta: {
                subject: patient.id
            },
            data: patient
        }]);
        
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
