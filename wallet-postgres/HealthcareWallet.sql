
CREATE DATABASE HealthcareWallet OWNER postgres;

/* DOMAIN: Patient */

CREATE TABLE Patients (
    PatientID           VARCHAR(20)     NOT NULL    PRIMARY KEY,
    FirstName           VARCHAR(20)     NOT NULL,
    LastName            VARCHAR(20),
    MiddleName          VARCHAR(20),
    Email               VARCHAR(50)     NOT NULL    UNIQUE,
    Username            VARCHAR(20)     NOT NULL    UNIQUE,
    Password            VARCHAR(250)    NOT NULL    UNIQUE,
    Birthdate           DATE            NOT NULL,
    Phone               VARCHAR(12),
    ProviderID          VARCHAR(20)     NOT NULL    FOREIGN KEY
);

CREATE TABLE PatientDiseases (
    PatientID           VARCHAR(20)     NOT NULL    PRIMARY KEY,
    DiseaseID           VARCHAR(20)     NOT NULL    PRIMARY KEY,
    DateDiagnosed       DATE            NOT NULL    PRIMARY KEY,
    DateCured           DATE
);

CREATE TABLE PatientSymptoms (
    PatientID           VARCHAR(20)     NOT NULL    PRIMARY KEY,
    SymptomID           VARCHAR(20)     NOT NULL    PRIMARY KEY,
    FirstExperienced    DATETIME        NOT NULL,
    LastExperienced     DATETIME,
    DateResolved        DATETIME,
    Severity            VARCHAR(50)
);

/* DOMAIN: Disease */

CREATE TABLE Diseases (
    DiseaseID           VARCHAR(20)     NOT NULL    PRIMARY KEY,
    Name                VARCHAR(50)     NOT NULL,
    Description         VARCHAR(250)    NOT NULL,
    ICD10               VARCHAR(20)     NOT NULL    FOREIGN KEY
);

CREATE TABLE Symptoms (
    SymptomID           VARCHAR(20)     NOT NULL    PRIMARY KEY,
    Name                VARCHAR(50)     NOT NULL,
    Description         VARCHAR(250)    NOT NULL
);

CREATE TABLE DiseaseSymptoms (
    DiseaseID           VARCHAR(20)     NOT NULL    PRIMARY KEY,
    SymptomID           VARCHAR(20)     NOT NULL    PRIMARY KEY
);

/* DOMAIN: Insurance */

CREATE TABLE Claims (
    ClaimID             VARCHAR(20)     NOT NULL    PRIMARY KEY,
    PatientID           VARCHAR(20)     NOT NULL    FOREIGN KEY,
    ProviderID          VARCHAR(20)     NOT NULL    FOREIGN KEY,
    DateFiled           DATE            NOT NULL,
    ClaimStatus         VARCHAR(50)
);

CREATE TABLE InsuranceProviders (
    ProviderID          VARCHAR(20)     NOT NULL    PRIMARY KEY,
    VisitID             VARCHAR(20)     NOT NULL    PRIMARY KEY,
    RequiredInfo        VARCHAR(50)     NOT NULL
);

CREATE TABLE Visit (
    VisitID             VARCHAR(20)     NOT NULL    PRIMARY KEY,
    VisitDate           DATE            NOT NULL,
    ICD10               VARCHAR(20)     NOT NULL    FOREIGN KEY,
    DRG                 VARCHAR(20)     NOT NULL
);
