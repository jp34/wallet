
CREATE DATABASE HealthcareWallet OWNER postgres;

/*  DOMAIN: Accounts
    PURPOSE: Groups JustBe account with Ethereum account used to conduct transactions.

*/

CREATE TABLE Accounts (
    AccountID           VARCHAR(20)     PRIMARY KEY,
    EthAccountAddress   VARCHAR(50)     NOT NULL        UNIQUE,
    Email               VARCHAR(50)     NOT NULL        UNIQUE,
    Password            VARCHAR(50)     NOT NULL
);

/*  DOMAIN: Patients
    PURPOSE: 
*/

CREATE TABLE Patients (
    AccountID           VARCHAR(20)     PRIMARY KEY     REFERENCES Accounts,
    FirstName           VARCHAR(20)     NOT NULL,
    MiddleName          VARCHAR(20)     NOT NULL,
    LastName            VARCHAR(20)     NOT NULL,
    Phone               VARCHAR(12)     NOT NULL        UNIQUE,
    Birthdate           DATE            NOT NULL,
    ProviderID          VARCHAR(20)     NOT NULL        REFERENCES Providers
);

CREATE TABLE PatientDiagnoses (
    AccountID           VARCHAR(20)     NOT NULL        REFERENCES Patients,
    ICD10               VARCHAR(20)     NOT NULL        REFERENCES Diagnoses,
    DateDiagnosed       DATE            NOT NULL,
    PRIMARY KEY         (AccountID, ICD10, DateDiagnosed)
);

/*  DOMAIN: Diagnoses
    PURPOSE: Stores a record of a specific diagnosis identified by an ICD-10-CM or
             ICD-10-PCS code
*/

CREATE TABLE Diagnoses (
    ICD10               VARCHAR(20)     PRIMARY KEY,
    DRG                 VARCHAR(20)     NOT NULL,
    Name                TEXT            NOT NULL,
    Description         TEXT            NOT NULL
);

/*  DOMAIN: Transactions
    PURPOSE: Stores a record of each transaction conducted by a patient over Ethereum
*/

CREATE TABLE Transactions (
    TransactionID       VARCHAR(20)     PRIMARY KEY,
    OwnerID             VARCHAR(20)     NOT NULL        REFERENCES Accounts,
    DateCreated         DATE            NOT NULL
);

/*  DOMAIN: Documents
    PURPOSE: Stores a record of documents generated from patient information.
             Should also include information about the NFT created with the document
*/

CREATE TABLE Documents (
    DocumentID          VARCHAR(20)     PRIMARY KEY,
    OwnerID             VARCHAR(20)     NOT NULL        REFERENCES Accounts,
    DateCreated         DATE            NOT NULL
);
