import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const validateAccess = (controller: string, action: string) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const secret = process.env.JWT_SECRET;

    if (!secret) {
      throw new Error("JWT secret not configured");
    }
    const header = req.header("Authorization") || "";
    const token = header.split(" ")[1];
    if (token) {
      try {
        const decodeToken = jwt.verify(token, secret);
        console.log(decodeToken);
        next();
      } catch (err) {
        console.error("Invalid token");
        res.status(403).send({ mesage: "Invalid Token" });
      }
    } else {
      res.status(401).send({ message: "Required token" });
    }
  };
};
