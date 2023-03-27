-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "ensAddress" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "earning" BOOLEAN NOT NULL DEFAULT false,
    "created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modified" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Patient" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "firstName" TEXT NOT NULL,
    "middleName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "birthday" DATETIME NOT NULL,
    "created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modified" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Patient_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PatientMedication" (
    "patientId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "dosage" INTEGER NOT NULL,
    "frequency" TEXT NOT NULL,
    "created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modified" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("patientId", "name"),
    CONSTRAINT "PatientMedication_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PatientAllergies" (
    "patientId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "severity" INTEGER NOT NULL,
    "created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modified" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("patientId", "name"),
    CONSTRAINT "PatientAllergies_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "MedicalEncounter" (
    "patientId" INTEGER NOT NULL,
    "provider" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modified" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("patientId", "date"),
    CONSTRAINT "MedicalEncounter_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_ensAddress_key" ON "User"("ensAddress");

-- CreateIndex
CREATE UNIQUE INDEX "Patient_userId_key" ON "Patient"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "PatientMedication_patientId_key" ON "PatientMedication"("patientId");

-- CreateIndex
CREATE UNIQUE INDEX "PatientAllergies_patientId_key" ON "PatientAllergies"("patientId");

-- CreateIndex
CREATE UNIQUE INDEX "MedicalEncounter_patientId_key" ON "MedicalEncounter"("patientId");
