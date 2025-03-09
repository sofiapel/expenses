import { NextFunction, Request, Response } from "express";
import Expense from "../repositories/expense";

export const getOne = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const expense = await Expense.findOne({
      where: { id: req.params.id, isDeleted:false },  order: [["date", "DESC"]],
    });
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
    console.log(req.params)
    const expenses = await Expense.findAll({
      where: { userId: req.params.idUser, isDeleted:false },order: [["date", "DESC"]],
    });
    console.log(expenses)
    res.status(200).json({ data: expenses });
  } catch (error: any) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const createExpense = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newExpense = await Expense.create(req.body)
    res.status(201).json({ message: "Data creada exitosamente", data: newExpense });
  } catch (error: any) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const updateExpense = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const [_,updatedExpense] = await Expense.update(req.body, { where: { id: req.params.id, isDeleted:false }, returning:true });

    res.status(200).json({ message: "Data actualizada exitosamente", data:updatedExpense[0] });
  } catch (error: any) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

