const axios = require("axios");

const baseUrl = "http://localhost:8000/api/";
var token = "";
var user = {};

/**
 * This method makes a login request to the Strapi API
 * @param identifier Username or email of user to login as
 * @param password Password of user
 * @returns User data if login is successful, otherwise false
 */
export const login = async (identifier, password) => {
    try {
        let response = await axios.post(baseUrl.concat('auth/local/'), {
            identifier: identifier,
            password: password
        }, { mode: 'no-cors' });
        if (response.status != 200) throw Error("Server responded with error");
        token = response.data.jwt;
        user = response.data.user;
        console.log(user);
        return user;
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
 * @returns User data if login is successful, otherwise false
 */
export const signup = async (username, email, password) => {
    try {
        let response = await axios.post(baseUrl.concat('auth/local/register'), {
            username: username,
            email: email,
            password: password
        }, { mode: 'no-cors' });
        if (response.status != 200) throw Error("Server responded with error");
        token = response.data.jwt;
        user = response.data.user;
        return user;
    } catch (error) {
        console.log("Signup failed due to error");
        console.log(error);
        return false;
    }
}

export const createPatient = async (username, firstName, middleName, lastName, phone, birthday) => {
    try {
        const response = await axios.post(baseUrl.concat('auth/local/register'),
            {
                data: {
                    username: username,
                    first_name: firstName,
                    middle_name: middleName,
                    last_name: lastName,
                    phone: phone,
                    birthday: birthday,
                }
            },
            {
                Authorization: `Bearer ${token}`,
                mode: 'no-cors',
            }
        );
        if (response.status != 200) throw Error("Server responded with error");
        return response.data;
    } catch (error) {
        console.log("Create patient failed with error");
        console.log(error);
        return false;
    }
}

/**
 * This method makes a patient info request to the Strapi API
 * @param username Username of new user
 * @param middlename middle name of usrer
 * @param lastname last name of new user
 * @param birthday birthday of new user
 * @returns User data if post is successful, otherwise false
 */
export const createPatient = async (username, firstname, middlename, lastname, phone, birthday) => {
    try {
        const response = await axios.post(baseUrl.concat('/patients'), {
            data: {
                username: username,
                first_name: firstname,
                middle_name: middlename,
                last_name: lastname,
                phone : phone,
                birthday: birthday
            }
        }, {
            mode: 'no-cors' ,
            Authorization: `Bearer ${token}`
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

/**
 * This method returns the user data that was received at login
 * @returns User data
 */
export const getUserData = () => {
    if (user == undefined) throw Error("Not logged in");
    return user;
}

/**
 * This method makes a get request to the server, and returns patient info for the current
 * logged in user
 * @returns Patient data
 */
export const getPatientData = async () => {
    if (user == undefined) throw Error("Not logged in");
    return await query('get', `patients/${user.id}/`);
}
