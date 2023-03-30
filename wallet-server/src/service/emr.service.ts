import axios from "axios";
import prisma from "../config/db";
import logger from "../util/logger";

const WEB3_SERVER_HOST = process.env.WEB3_SERVER_HOST;
const WEB3_SERVER_PORT = process.env.WEB3_SERVER_PORT;
const WEB3_SERVER_URL = `http://${WEB3_SERVER_HOST}:${WEB3_SERVER_PORT}/api`;

export const createEmr = async (id: number) => {
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
        const result = await axios.post(WEB3_SERVER_URL.concat('/emr'), {
            meta: {
                subject: patient.id
            },
            data: patient
        });
        if (result.status != 200) throw new Error("Received error from web3-listener");

        // Store record of emr creation
        const receipt = await prisma.emr.create({
            data: {
                cid: result.data.cid,
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
