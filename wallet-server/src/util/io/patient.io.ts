
// Patient

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

// Patient Medication

export interface CreatePatientMedication {
    name: string;
    dosage: string;
    frequency: string;
    date: string;
}

export interface CreatePatientMedicationRequest extends Express.Request {
    params: {
        id: string
    },
    body: {
        data: CreatePatientMedication
    }
}

export interface CreateManyPatientMedicationRequest extends Express.Request {
    params: {
        id: string
    },
    body: {
        data: CreatePatientMedication[]
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

// Patient Allergy

export interface CreatePatientAllergy {
    name: string;
    severity: string;
}

export interface CreatePatientAllergyRequest extends Express.Request {
    params: {
        id: string
    },
    body: {
        data: CreatePatientAllergy
    }
}

export interface CreateManyPatientAllergyRequest extends Express.Request {
    params: {
        id: string
    },
    body: {
        data: CreatePatientAllergy[]
    }
}

export interface UpdatePatientAllergyRequest extends Express.Request {
    params: {
        id: string,
        name: string
    },
    body: {
        data: {
            severity: string,
        }
    }
}

// Medical Encounter

export interface CreateMedicalEncounter {
    reason: string;
    provider: string;
}

export interface CreateMedicalEncounterRequest extends Express.Request {
    params: {
        id: string
    },
    body: {
        data: CreateMedicalEncounter
    }
}

export interface CreateManyMedicalEncounterRequest extends Express.Request {
    params: {
        id: string
    },
    body: {
        data: CreateMedicalEncounter[]
    }
}

export interface UpdateMedicalEncounterRequest extends Express.Request {
    params: {
        id: string,
        date: string
    },
    body: {
        data: {
            provider: string,
        }
    }
}
