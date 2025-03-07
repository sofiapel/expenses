import { NextFunction, Request, Response } from "express";
import Expense from "../repositories/expense";

export const getOne = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const expense = await Expense.findOne({
      where: { id: req.params.id },
    });
    console.log(expense);
    res.status(200).json({ data: expense });
  } catch (error: any) {
    res.status(500).json({ message: 'Internal server error' });

  }
};

export const getExpensesByUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const expenses = await Expense.findAll({
      /*where: { idUser: req.params.idUser },*/
    });
    res.status(200).json({ data: expenses });
  } catch (error: any) {
    console.error("Error in register:", error);
  }
};

export const createExpense = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.status(201).json({ message: "OK" });
  } catch (error: any) {
    console.error("Error in register:", error);
  }
};

export const deleteExpense = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.status(201).json({ message: "OK" });
  } catch (error: any) {
    console.error("Error in register:", error);
  }
};
