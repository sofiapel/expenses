import express, { json } from "express";
import dotenv from "dotenv"
import sequelize from "./repositories/index"
import cors from "cors";

import expenseRouter from "./routes/expense-route" 
import loginRouter from "./routes/login-route"
import Expense from "./repositories/expense";
import User from "./repositories/user";

dotenv.config()
const app = express() 

const port  = process.env.PORT ||"4444";

app.use(cors())
app.use(json())

app.use("apiv2/auth", loginRouter);
app.use("apiv2/expense", expenseRouter);




app.listen(port, () => {
    console.info(`Server listening in port ${port}`)
})

const syncDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    
    await sequelize.sync({ alter: true}); 
    
    console.log('Database & tables created!');
    
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

syncDatabase();
