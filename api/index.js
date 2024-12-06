import express from "express";

const app = express()

const port  = "4444";

app.get("/hello",(req, res)=> {
    res.send("Hello desde el server")
})

app.listen(port, () => {
    console.info(`Server listening in port ${port}`)
})