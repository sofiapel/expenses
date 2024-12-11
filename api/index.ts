import express, { json } from "express";
import dotenv from "dotenv"

dotenv.config()
const app = express()

const port  = process.env.PORT ||"4444";

app.use(json())

app.get("/hello",(req, res)=> {
    res.send("Hello desde el server")
})

app.listen(port, () => {
    console.info(`Server listening in port ${port}`)
})