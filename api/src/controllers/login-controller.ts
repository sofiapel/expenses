import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';
import User from "../repositories/user"; 
import dotenv from "dotenv"
dotenv.config()

export const loginUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ message: "Username and password are required" });
    }

    const userN = await User.findOne({
      where: {
        username, 
      }
    })

    if(!userN){
      return res.status(401).json({ message: "Username not found" });
    }

    console.log(userN);

    const equalPassword = await bcrypt.compare(password,userN?.dataValues.password)

    console.log(equalPassword)
    

    if (equalPassword) {
      const token = jwt.sign({ username }, process.env.JWT_SECRET!, { expiresIn: "1h" });
      return res.status(200).json({ token });
    } else {
      return res.status(401).json({ message: "Authentication failed" });
    }
  } catch (error) {
    console.error('Error in loginUser:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { firstName, lastName, username, password } = req.body;
    console.log(password, username, firstName, lastName);
    if (!firstName || !lastName || !username || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({ firstName, lastName, username, password: hashedPassword });
    //res.redirect()
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error: any) {
    console.error('Error in register:', error);
    res.status(500).json({ error: 'Registration failed', details: error.message });
  }
};
