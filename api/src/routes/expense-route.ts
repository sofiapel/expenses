import express from "express";
import asyncMiddleware from "../middlewares/async.middleware";
import { getExpensesByUser, getOne } from "../controllers/expense-controller";
const router = express.Router();

router.get("/:id",asyncMiddleware(getOne));
router.get("/user/:idUser",asyncMiddleware(getExpensesByUser));

export default router
