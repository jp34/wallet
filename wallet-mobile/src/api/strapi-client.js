const axios = require("axios");

const baseUrl = "http://localhost:8000/api/";
var token = "";
export var user = {};

export const login = async (email, password) => {
    try {
        let response = await axios.post(baseUrl.concat('auth/local/'),
            {
                identifier: email,
                password: password
            },
            {
                mode: 'no-cors'
            }
        );
        if (response.status != 200) throw Error("Server responded with error");
        token = response.data.jwt;
        user = response.data.user;
        return user;
    } catch (error) {
        console.log("Login failed due to error");
        console.log(error);
        return false;
    }
}

/**
 * This method returns json data about a single patient
 * @param id ID of patient to fetch
 * @returns Patient json data if exists
 */
export const getPatient = async (id) => {
    return await query('get', `patients/${id.toString()}`);
}

/**
 * This method returns json data about multiple patients
 * @returns Array of patient data
 */
export const getPatients = async () => {
    return await query('get', 'patients/');
}

/**
 * This is a utility method used by various query methods
 * @param method Http method to use (get/post)
 * @param url Location of resource
 * @returns The data section of the response body
 */
const query = async (method, url) => {
    if (method != 'get' && method != 'post') throw Error("Invalid method provided, use 'get' or 'post'")
    try {
        let response = await axios({
            method: method,
            mode: 'no-cors',
            url: baseUrl.concat(url),
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.log(error);
        throw Error(error);
    }
}
