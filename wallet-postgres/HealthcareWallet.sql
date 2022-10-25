
drop database if exists HealthcareWallet;

create database HealthcareWallet owner postgres;

-- Providers Table
create table Providers (
	ProviderID		SERIAL			primary key
,	ProviderName	VARCHAR(255)	not null
,	phone			VARCHAR(25)		not null
);	

-- Patients Table
create table Patients (
	PatientID	BIGSERIAL 		primary key
,	FirstName	VARCHAR(255)	NOT NULL
,	MiddleName	VARCHAR(255)	
,	LastName	VARCHAR(255)	not null
,	Phone		VARCHAR(25)		
,	BirthDate	DATE			not null
, 	ProviderID	SERIAL			not null	
,	foreign key (ProviderID) references Providers (ProviderID)
);

-- Accounts Table
create table Accounts (
	AccountID	BIGSERIAL 		primary key
,	PatientID	BIGSERIAL		not null
,	ENS_Account	VARCHAR(100)	not null
,	Email		VARCHAR(255)	not null
,	Password	VARCHAR(255)	not null
,	foreign key (PatientID) references Patients (PatientID)
);

-- Transactions Table
create table Transactions (
	TransactionID	BIGSERIAL	primary key
,	AccountID		BIGSERIAL	not null
,	DateCreated		DATE		not null
, 	foreign key (AccountID) references Accounts (AccountID)
);

-- Documents Table
create table Documents (
	DocumentID		BIGSERIAL	primary key
,	AccountID		BIGSERIAL	not null
,	DateCreated		DATE		not null
,	foreign key (AccountID) references Accounts (AccountID)
);

-- RequiredInfo Table
create table RequiredInfo (
	ProviderID 		BIGSERIAL		not null
,	DRG_CODE		VARCHAR(50)		not null
,	RequiredInfo	VARCHAR(255)	not null
, 	primary key (ProviderID, DRG_CODE)
);

-- Visits Table
create table Visits (
	VisitID		BIGSERIAL		primary key
,	PatientID	BIGSERIAL		not null
,	ICD10CM		VARCHAR(50)		not null
,	ICD10PCS	VARCHAR(50)		not null
,	DRG_CODE	VARCHAR(50)		not null
,	Symptoms	VARCHAR(255)	not null
,	DateOfVisit	DATE			not null
,	Doctor		VARCHAR(255)	not null
,	foreign key (PatientID) references Patients (PatientID)
);

-- Diseases Table
create table Diseases (
	DiseaseID		BIGSERIAL		primary key
,	Name			VARCHAR(255)	not null
,	PatientID		BIGSERIAL		not null
,	VisitDiagnosed	BIGSERIAL		not null
,	DateDiagnosed	DATE			not null
,	DateCured		DATE
,	foreign key (PatientID) references Patients (PatientID)
,	foreign key (VisitDiagnosed) references Visits (VisitID)
);




