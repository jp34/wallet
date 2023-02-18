const axios = require("axios");

const host = 'localhost';
const port = '8000';
const baseUrl = `http://${host}:${port}`;

var session = {
    user: {},
    token: ""
}

/**
 * This method makes a login request to the Strapi API
 * @param identifier Username or email of user to login as
 * @param password Password of user
 * @returns True if successful, otherwise false
 */
export const login = async (identifier, password) => {
    try {
        const response = await axios.post(baseUrl.concat('/api/auth/local'), {
            identifier: identifier,
            password: password
        }, { mode: 'no-cors' });
        if (response.status != 200) throw Error("Server responded with error");
        session.user = response.data.user;
        session.token = response.data.jwt;
        console.log(session.user);
        return true;
    } catch (error) {
        console.log("Login failed due to error");
        console.log(error);
        return false;
    }
}

/**
 * This method makes a signup request to the Strapi API
 * @param username Username of new user
 * @param email Email of new user
 * @param password Password of new user
 * @returns True if successful, otherwise false
 */
export const createAccount = async (username, email, password, agreement) => {
    try {
        if (!agreement) throw new Error("User has not accepted the terms and conditions!");
        const response = await axios.post(baseUrl.concat('/api/auth/local/register'), {
            username: username,
            email: email,
            password: password,
            agreement: agreement
        }, { mode: 'no-cors' });
        if (response.status != 200) throw Error("Server responded with error");
        session.user = response.data.user;
        session.token = response.data.jwt;
        return true;
    } catch (error) {
        console.log("Signup failed due to error");
        console.log(error);
        return false;
    }
}

/**
 * This method makes a patient info request to the Strapi API
 * @param firstName Username of new patient
 * @param middleName middle name of patient
 * @param lastName last name of new patient
 * @param phone phone number of new patient
 * @param birthday birthday of new patient
 * @returns Patient data if successful, otherwise false
 */
export const createPatient = async (firstName, middleName, lastName, phone, birthday) => {
    try {
        console.log(session);
        console.log(`Username ${session.user.username}`);
        console.log(`FirstName ${firstName}`);
        console.log(`MiddleName ${middleName}`);
        console.log(`LastName ${lastName}`);
        console.log(`Phone ${phone}`);
        console.log(`Birthday ${birthday}`);
        const response = await axios.post(baseUrl.concat('/api/patients'), {
            data: {
                username: session.user.username,
                firstName: firstName,
                middleName: middleName,
                lastName: lastName,
                phone : phone,
                birthday: birthday
            }
        }, {
            headers: {
                Authorization: `Bearer ${session.token}`,
                'Content-Type': 'application/json',
            }
        });
        if (response.status != 200) throw Error("Server responded with error");
        return response.data;
    } catch (error) {
        console.log("Create patient failed with error");
        console.log(error);
        return false;
    }
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
        const response = await axios({
            method: method,
            mode: 'no-cors',
            url: baseUrl.concat(url),
            headers: {
                Authorization: `Bearer ${session.token}`
            }
        });
        return response.data;
    } catch (error) {
        console.log(error);
        throw Error(error);
    }
}

/**
 * This method returns the user data that was received at login
 * @returns User data
 */
export const getUserData = () => {
    if (session.user == undefined) throw Error("Not logged in");
    return session.user;
}

/**
 * This method makes a get request to the server, and returns patient info for the current
 * logged in user
 * @returns Patient data
 */
export const getPatientData = async () => {
    if (session.user == undefined) throw Error("Not logged in");
    return await query('get', `/api/patients/${session.user.id}/`);
}
