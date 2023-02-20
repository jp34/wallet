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
        return true;
    } catch (err) {
        console.log("Login failed due to error");
        console.log(err);
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
    } catch (err) {
        console.log("Signup failed due to error");
        console.log(err);
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
        if (!session) throw Error('User has not been authenticated yet');
        const response = await axios.post(baseUrl.concat('/api/patients'), {
            'data': {
                'username': session.user.username,
                'firstName': firstName,
                'middleName': middleName,
                'lastName': lastName,
                'phone' : phone,
                'birthday': birthday
            }
        }, {
            headers: {
                Authorization: `Bearer ${session.token}`,
            }
        });
        if (response.status != 200) throw Error("Server responded with error");
        return response.data;
    } catch (err) {
        console.log("Create patient failed with error");
        console.log(err);
        return false;
    }
}

export const createPatientAllergy = async (patientId, description, severity) => {
    try {
        if (!session) throw Error('User has not been authenticated yet');
        const response = await axios.post(baseUrl.concat('/api/patient-allergies'), {
            'data': {
                'patient': patientId,
                'description': description,
                'severity': severity
            }
        }, {
            headers: {
                Authorization: `Bearer ${session.token}`,
            }
        });
        if (response.status != 200) throw Error("Server responded with error");
        return response.data;
    } catch (err) {
        console.log("Failed to record patient allergy");
        console.log(err);
        return false;
    }
}

export const createPatientMedication = async (patientId, name, dosage, frequency) => {
    try {
        if (!session) throw Error('User has not been authenticated yet');
        const response = await axios.post(baseUrl.concat('/api/patient-medications'), {
            'data': {
                'patient': patientId,
                'name': name,
                'dosage': dosage,
                'frequency': frequency,
            }
        }, {
            headers: {
                Authorization: `Bearer ${session.token}`,
            }
        });
        if (response.status != 200) throw Error("Server responded with error");
        return response.data;
    } catch (err) {
        console.log("Failed to record patient medication");
        console.log(err);
        return false;
    }
}

export const getPatientData = async () => {
    try {
        if (!session) throw Error('User has not been authenticated yet');
        const response = await axios.get(baseUrl.concat(`/api/findByUsername/${session.user.username}`), {
            headers: {
                Authorization: `Bearer ${session.token}`,
            }
        });
        if (response.status != 200) throw Error("Server responded with error");
        console.log(JSON.stringify(response));
        return response.data;
    } catch (err) {
        console.log("Failed to get patient data");
        console.log(err);
        return false;
    }
}
