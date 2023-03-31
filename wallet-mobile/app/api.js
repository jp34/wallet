import axios from "axios";

const host = "localhost";
const port = "8000";
const url = `http://${host}:${port}`;

var session = {
    user: {},
    tokens: {}
};

// Authorization Methods

export const login = async (email, password) => {
    try {
        const response = await axios.post(url.concat('/api/auth/login'), {
            data: {
                email: email,
                password: password
            }
        }, { mode: 'no-cors' });
        if (response.status != 200) throw Error("Server responded with error");
        session.user = response.data.data;
        session.tokens = response.data.tokens;
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
}

export const signup = async (email, password) => {
    try {
        const response = await axios.post(url.concat('/api/auth/signup'), {
            data: {
                email: email,
                password: password
            }
        }, { mode: 'no-cors' });
        if (response.status != 200) throw Error("Server responded with error");
        session.user = response.data.data;
        session.tokens = response.data.tokens;
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
}

// Helper Methods

const getRequest = async (path) => {
    try {
        if (!session.user) throw new Error("User has not authenticated yet");
        const response = await axios.get(url.concat(path), {
            mode: 'no-cors',
            headers: {
                Authorization: `Bearer ${session.tokens.access}`
            } 
        });
        return response.data.data;
    } catch (err) {
        console.log(err);
        return false;
    }
}

const postRequest = async (path, data) => {
    try {
        if (!session.user) throw new Error("User has not authenticated yet");
        const response = await axios.post(url.concat(path), { data: data }, {
            mode: 'no-cors',
            headers: {
                Authorization: `Bearer ${session.tokens.access}`
            } 
        });
        return response.data.data;
    } catch (err) {
        console.log(err);
        return false;
    }
}

// User Methods

export const getUser = async () => {
    return await getRequest(`/api/users/${session.user.id}`);
}

// Patient Methods

export const createPatient = async (firstName, middleName, lastName, phone, birthday) => {
    return await postRequest(`/api/patients/${session.user.id}`, {
        firstName: firstName,
        middleName: middleName,
        lastName: lastName,
        phone: phone,
        birthday: birthday
    });
}

export const getPatient = async () => {
    return await getRequest(`/api/patients/${session.user.id}`);
}

export const getPatientMedications = async () => {
    return await getRequest(`/api/patients/${session.user.id}/medications`);
}

export const getPatientMedication = async (name) => {
    return await getRequest(`/api/patients/${session.user.id}/medications/${name}`);
}
