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

export const getUserData = () => {
    if (user == undefined) throw Error("Not logged in");
    return user;
}

export const getPatientData = () => {
    if (user == undefined) throw Error("Not logged in");
}
