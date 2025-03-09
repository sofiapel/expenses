import express from "express";
import asyncMiddleware from "../middlewares/async.middleware";
import { createExpense, getExpensesByUser, getOne, updateExpense } from "../controllers/expense-controller";
import { validateAccess } from "../middlewares/authentication.middleware";
const router = express.Router();

router.get("/:id",validateAccess(),asyncMiddleware(getOne));
router.get("/user/:idUser",validateAccess(),asyncMiddleware(getExpensesByUser));
router.post("/",validateAccess(),asyncMiddleware(createExpense));
router.put("/:id",validateAccess(),asyncMiddleware(updateExpense));



export default router
