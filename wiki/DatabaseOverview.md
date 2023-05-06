# [Healthcare Wallet](https://github.com/Healthcare-Wallet/wallet/tree/main) / [Wiki](https://github.com/Healthcare-Wallet/wallet/tree/main/wiki) / Database Overview

There are several different Data Models used within our system, most of which define the data stored for each patient

## User

The User model contains all the information nessecary for a user to interact with our application properly.

```
id              // Unique ID
email
ensAddress      // MetaMask wallet address
password
patient         // Related patient model
products        // List of products owned by the user (before sale)
```

## Patient

The Patient model and its relations contain all the medical information related to a specifc user. This information is stored seperately from the PII needed to have an account.

```
id              // Unique ID (Same as user ID)
firstName
middleName
lastName
phone
birthday
medications     // List of PatientMedication models
allergies       // List of PatientAllergy models
encounters      // List of MedicalEncounter models
```

## PatientMedication

This model stores a record of a medication prescribed to the patient, its dosage, and the frequency in which it is taken.

```
patientId       // ID of related patient
name            // Name of medication
dosage          // Prescription strength
frequency		// (Once a day, once in the morning, etc.)
date            // Prescription date
```

## PatientAllergy

This model stores a record of a patient allergy and its severity

```
patientId       // ID of related patient
name			// Name of the allergy (Pollen, Gluten, etc.)
severity		// Number on scale of 1-10
```

## MedicalEncounter

This model stores a record of a medical encounter between a patient and medical provider.

```
patientId		// ID of related patient
provider		// Medical Provider
reason			// Reason for visit
```

## Product

The Product model stores information about a specific product as it moves through our system.

```
id              // Unique ID
cid             // Content ID received from IPFS when data was stored there
subjectId		// ID of related patient
voucher         // NFT Voucher, received from the marketplace contract
buyerAddress    // Buyer wallet address (If sold)
price			// Sale price
sold            // Boolean, true if the product has sold
```

## Payment

This model records the amounts owed to users whose data has been sold, which is needed to payout user earnings.

```
subject         // ID of the user owed
amount          // Amount owed
```