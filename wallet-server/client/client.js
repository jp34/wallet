const axios = require("axios");

const host = "localhost";
const port = "8000";
const url = `http://${host}:${port}`;

var session = {
    user: {},
    tokens: {}
};

// Authorization Methods

const login = async (email, password) => {
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

const signup = async (email, ensAddress, password) => {
    try {
        const response = await axios.post(url.concat('/api/auth/signup'), {
            data: {
                email: email,
                ensAddress: ensAddress,
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

const getUser = async () => {
    return await getRequest(`/api/users/${session.user.id}`);
}

// Patient Methods

const createPatient = async (firstName, middleName, lastName, birthday) => {
    return await postRequest('/api/patients', {
        id: session.user.id,
        firstName: firstName,
        middleName: middleName,
        lastName: lastName,
        birthday: birthday
    });
}

const getPatient = async () => {
    return await getRequest(`/api/patients/${session.user.id}`);
}

const getPatientMedications = async () => {
    return await getRequest(`/api/patients/${session.user.id}/medications`);
}

const getPatientMedication = async (name) => {
    return await getRequest(`/api/patients/${session.user.id}/medications/${name}`);
}

const main = async () => {
    await login("testing@test.com", "password");
    const result = await getPatientMedications();
    console.log(result);
}

main();