
drop database if exists wallet;
create database wallet with owner = postgres;

-- Providers Table
create table Providers (
	ProviderID		serial			primary key
,	ProviderName	varchar(255)	not null
,	phone			varchar(25)		not null
);

-- Patients Table
create table Patients (
	PatientID		bigserial 		primary key
,	FirstName		varchar(255)	not null
,	MiddleName		varchar(255)	
,	LastName		varchar(255)	not null
,	Phone			varchar(25)		
,	BirthDate		date			not null
, 	ProviderID		serial			not null	
,	foreign key (ProviderID) references Providers (ProviderID)
);

-- Accounts Table
create table Accounts (
	AccountID		bigserial 		primary key
,	PatientID		bigserial		not null
,	ENS_Account		varchar(100)	not null
,	Email			varchar(255)	not null
,	Password		varchar(255)	not null
,	foreign key (PatientID) references Patients (PatientID)
);

-- Transactions Table
create table Transactions (
	TransactionID	bigserial		primary key
,	AccountID		bigserial		not null
,	DateCreated		date			not null
, 	foreign key (AccountID) references Accounts (AccountID)
);

-- Documents Table
create table Documents (
	DocumentID		bigserial		primary key
,	AccountID		bigserial		not null
,	DateCreated		date			not null
,	foreign key (AccountID) references Accounts (AccountID)
);

-- RequiredInfo Table
create table RequiredInfo (
	ProviderID 		bigserial		not null
,	DRG_CODE		varchar(50)		not null
,	RequiredInfo	varchar(255)	not null
, 	primary key (ProviderID, DRG_CODE)
);

-- Visits Table
create table Visits (
	VisitID			bigserial		primary key
,	PatientID		bigserial		not null
,	ICD10CM			varchar(50)		not null
,	ICD10PCS		varchar(50)		not null
,	DRG_CODE		varchar(50)		not null
,	Symptoms		varchar(255)	not null
,	DateOfVisit		date			not null
,	Doctor			varchar(255)	not null
,	foreign key (PatientID) references Patients (PatientID)
);

-- Diseases Table
create table Diseases (
	DiseaseID		bigserial		primary key
,	Name			varchar(255)	not null
,	PatientID		bigserial		not null
,	VisitDiagnosed	bigserial		not null
,	DateDiagnosed	date			not null
,	DateCured		date
,	foreign key (PatientID) references Patients (PatientID)
,	foreign key (VisitDiagnosed) references Visits (VisitID)
);
