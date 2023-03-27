import { Router } from "express";
import { authorize } from "../middleware/auth";
import AuthController from "./auth.controller";
import UserController from "./user.controller";

const router = Router();
const auth = new AuthController();
const users = new UserController();

// Auth Endpoints
router.post("/auth/signup", auth.signup);
router.post("/auth/login", auth.login);
router.post("/auth/refresh", auth.refresh);

// User Endpoints
router.get("/users", authorize, users.getMany);
router.get("/users/:id", authorize, users.getOne);
router.put("/users/:id", authorize, users.update);
router.delete("/users/:id", authorize, users.delete);

export default router;
