
export interface CreatePatientRequest extends Express.Request {
    params: {
        id: string
    },
    body: {
        data: {
            firstName: string,
            middleName: string,
            lastName: string,
            birthday: string
        }
    }
}

export interface UpdatePatientRequest extends Express.Request {
    params: {
        id: string
    },
    body: {
        data: {
            firstName?: string,
            middleName?: string,
            lastName?: string,
            birthday?: string
        }
    }
}

export interface CreatePatientMedicationRequest extends Express.Request {
    params: {
        id: string
    },
    body: {
        data: {
            name: string,
            dosage: string,
            frequency: string
        }
    }
}

export interface UpdatePatientMedicationRequest extends Express.Request {
    params: {
        id: string,
        name: string
    },
    body: {
        data: {
            dosage?: string,
            frequency?: string
        }
    }
}
