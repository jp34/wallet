import axios from "axios";

const WEB3_HOST = process.env.STRAPI_WEB3_HOST;
const WEB3_PORT = process.env.STRAPI_WEB3_PORT;
const BASE_URL = `http://${WEB3_HOST}:${WEB3_PORT}/api`;

export default () => ({
    generate: async (user: number) => {
        try {
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
    
            // Compile EMR
            const emr = {
                meta: {},
                data: patient
            }
            
            // Send EMR to Web3 listener
            const response = await axios.post(BASE_URL.concat('/emr'), {
                'data': emr
            });

            if (response) return true;
            return false;
        } catch (err: any) {
            console.error(err);
            return false;
        }
    }
});
