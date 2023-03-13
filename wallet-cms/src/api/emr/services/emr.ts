import axios from "axios";

const WEB3_HOST = process.env.STRAPI_WEB3_HOST;
const WEB3_PORT = process.env.STRAPI_WEB3_PORT;
const BASE_URL = `http://${WEB3_HOST}:${WEB3_PORT}/api`;

export default () => ({
    generate: async (user: number) => {
        try {
            // Fetch patient and populate required fields
            const patient = await strapi.db.query('api::patient.patient').findOne({
                select: [
                    'firstName',
                    'middleName',
                    'lastName',
                    'birthday'
                ],
                where: { user: user},
                populate: [
                    'medicalEncounters',
                    'medications',
                    'allergies'
                ]
            });
    
            // Compile EMR document
            const emr = {
                meta: {},
                data: patient
            }
            
            // Send EMR to Web3 listener
            const response = await axios.post(BASE_URL.concat('/emr'), {
                'data': emr
            });

            const emrReceipt = await strapi.db.query('api::emr.emr').create({
                data: {
                    subject: patient.id,
                    cid: response.data.cid,
                    timestamp: Date.now()
                }
            });

            if (!emrReceipt) {
                throw new Error("Unable to store emr receipt");
            }

            if (response) return true;
            return false;
        } catch (err: any) {
            console.error(err);
            return false;
        }
    }
});
