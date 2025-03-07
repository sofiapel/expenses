import express from "express";
import { loginUser, register } from "../controllers/login-controller";
import asyncMiddleware from "../middlewares/async.middleware";
const router = express.Router();

router.post("/login",asyncMiddleware(loginUser));
router.post("/register", asyncMiddleware(register));

export default router
