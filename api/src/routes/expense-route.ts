import express from "express";
import asyncMiddleware from "../middlewares/async.middleware";
import { createExpense, getExpensesByUser, getOne, updateExpense } from "../controllers/expense-controller";
const router = express.Router();

router.get("/:id",asyncMiddleware(getOne));
router.get("/user/:idUser",asyncMiddleware(getExpensesByUser));
router.post("/",asyncMiddleware(createExpense));
router.put("/",asyncMiddleware(updateExpense));



export default router
