import express, { json } from "express";
import dotenv from "dotenv"
import loginRouter from "./routes/login-route"
import sequelize from "./repositories/index"
import User from "./repositories/usuario";
import cors from "cors";

dotenv.config()
const app = express() 

const port  = process.env.PORT ||"4444";

app.use(cors())
app.use(json())


app.use("/auth", loginRouter);


app.get("/hello",(req, res)=> {
    res.send("Hello desde el server")
})

app.listen(port, () => {
    console.info(`Server listening in port ${port}`)
})

const syncDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    await sequelize.sync({ alter: true}); // force: true borra y recrea las tablas
    console.log('Database & tables created!');
    
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

syncDatabase();
