import { Router } from "express";

// Import Controllers
import AuthController from "./controllers/auth.controller";
import UserController from "./controllers/user.controller";
import PatientController from "./controllers/patient/patient.controller";
import PatientMedicationController from "./controllers/patient/medication.controller";
import PatientAllergyController from "./controllers/patient/allergy.controller";
import MedicalEncounterController from "./controllers/patient/encounter.controller";
import MarketController from "./controllers/market.controller";

// Import Middleware
import { authorize } from "./middleware/auth";
import { syncProduct } from "./middleware/product";

const router = Router();
const auth = new AuthController();
const users = new UserController();
const patients = new PatientController();
const patientAllergies = new PatientAllergyController();
const patientMedications = new PatientMedicationController();
const medicalEncounters = new MedicalEncounterController();
const market = new MarketController();

// Auth Endpoints
router.post("/auth/signup", auth.signup);
router.post("/auth/login", auth.login);
router.post("/auth/refresh", auth.refresh);

// Market Endpoints
router.post("/products", market.purchaseProduct);
router.get("/products", market.getProducts);
router.get("/products/:id", market.getProduct);
router.get("/advertisements", market.getAdvertisements);
router.get("/payments/:id", market.getPaymentSum);

// User Endpoints
router.get("/users", authorize, users.getMany);
router.get("/users/:id", authorize, users.getOne);
router.put("/users/:id", authorize, users.update);
router.delete("/users/:id", authorize, users.delete);

// Patient Endpoints
router.post("/patients/:id", authorize, patients.create, syncProduct);
router.get("/patients", authorize, patients.getMany);
router.get("/patients/:id", authorize, patients.getOne);
router.put("/patients/:id", authorize, patients.update, syncProduct);
router.delete("/patients/:id", authorize, patients.delete);

// Patient Allergy Endpoints
router.post("/patients/:id/allergies", authorize, patientAllergies.create, syncProduct);
router.get("/patients/:id/allergies", authorize, patientAllergies.getMany);
router.get("/patients/:id/allergies/:name", authorize, patientAllergies.getOne);
router.put("/patients/:id/allergies/:name", authorize, patientAllergies.update, syncProduct);
router.delete("/patients/:id/allergies/:name", authorize, patientAllergies.delete, syncProduct);

// Patient Medication Endpoints
router.post("/patients/:id/medications", authorize, patientMedications.create, syncProduct);
router.get("/patients/:id/medications", authorize, patientMedications.getMany);
router.get("/patients/:id/medications/:name", authorize, patientMedications.getOne);
router.put("/patients/:id/medications/:name", authorize, patientMedications.update, syncProduct);
router.delete("/patients/:id/medications/:name", authorize, patientMedications.delete, syncProduct);

// Medical Encounter Endpoints
router.post("/patients/:id/encounters", authorize, medicalEncounters.create, syncProduct);
router.get("/patients/:id/encounters", authorize, medicalEncounters.getMany);
router.get("/patients/:id/encounters/:date", authorize, medicalEncounters.getOne);
router.put("/patients/:id/encounters/:date", authorize, medicalEncounters.update, syncProduct);
router.delete("/patients/:id/encounters/:date", authorize, medicalEncounters.delete, syncProduct);

export default router;