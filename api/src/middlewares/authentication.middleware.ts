import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const validateAccess = () => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const secret = process.env.JWT_SECRET;

    if (!secret) {
      throw new Error("JWT no configurado");
    }
    const header = req.header("Authorization") || "";
    const token = header.split(" ")[1];
    if (token) {
      try {
        const decodeToken = jwt.verify(token, secret);
        next();
      } catch (err) {
        console.error("Token Invalido");
        res.status(403).send({ mesage: "Token Invalido" });
      }
    } else {
      res.status(401).send({ message: "Token requerido" });
    }
  };
};
