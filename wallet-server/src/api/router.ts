import { Router } from "express";
import { authorize } from "../middleware/auth";
import AuthController from "./auth.controller";
import UserController from "./user.controller";
import PatientController from "./patient/patient.controller";
import PatientMedicationController from "./patient/medication.controller";
import { generateEmr } from "../middleware/emr";
import PatientAllergyController from "./patient/allergy.controller";
import MedicalEncounterController from "./patient/encounter.controller";

const router = Router();
const auth = new AuthController();
const users = new UserController();
const patients = new PatientController();
const patientAllergies = new PatientAllergyController();
const patientMedications = new PatientMedicationController();
const medicalEncounters = new MedicalEncounterController();

// Auth Endpoints
router.post("/auth/signup", auth.signup);
router.post("/auth/login", auth.login);
router.post("/auth/refresh", auth.refresh);

// User Endpoints
router.get("/users", authorize, users.getMany);
router.get("/users/:id", authorize, users.getOne);
router.put("/users/:id", authorize, users.update);
router.delete("/users/:id", authorize, users.delete);

// Patient Endpoints
router.post("/patients/:id", authorize, patients.create, generateEmr);
router.get("/patients", authorize, patients.getMany);
router.get("/patients/:id", authorize, patients.getOne);
router.put("/patients/:id", authorize, patients.update, generateEmr);
router.delete("/patients/:id", authorize, patients.delete);

// Patient Allergy Endpoints
router.post("/patients/:id/allergies", authorize, patientAllergies.create, generateEmr);
router.get("/patients/:id/allergies", authorize, patientAllergies.getMany);
router.get("/patients/:id/allergies/:name", authorize, patientAllergies.getOne);
router.put("/patients/:id/allergies/:name", authorize, patientAllergies.update, generateEmr);
router.delete("/patients/:id/allergies/:name", authorize, patientAllergies.delete, generateEmr);

// Patient Medication Endpoints
router.post("/patients/:id/medications", authorize, patientMedications.create, generateEmr);
router.get("/patients/:id/medications", authorize, patientMedications.getMany);
router.get("/patients/:id/medications/:name", authorize, patientMedications.getOne);
router.put("/patients/:id/medications/:name", authorize, patientMedications.update, generateEmr);
router.delete("/patients/:id/medications/:name", authorize, patientMedications.delete, generateEmr);

// Medical Encounter Endpoints
router.post("/patients/:id/encounters", authorize, medicalEncounters.create, generateEmr);
router.get("/patients/:id/encounters", authorize, medicalEncounters.getMany);
router.get("/patients/:id/encounters/:date", authorize, medicalEncounters.getOne);
router.put("/patients/:id/encounters/:date", authorize, medicalEncounters.update, generateEmr);
router.delete("/patients/:id/encounters/:date", authorize, medicalEncounters.delete, generateEmr);

export default router;
