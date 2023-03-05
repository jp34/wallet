import axios from "axios";

const STRAPI_URL = process.env.WEB3_STRAPI_URL;
const STRAPI_TOKEN = process.env.WEB3_STRAPI_TOKEN;

export const getPatientData = async () => {
    axios.get('').then((response) => {
        return response;
    }).catch((err) => {
        console.log('Failed to retrieve patient data');
        console.error(err);
        return null;
    });
}
