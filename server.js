const express = require("express")
const DB = require("./db/db.js")
const app = express()
const dotenv = require('dotenv')

dotenv.config();

DB();

app.use("/api/auth", (req, res) => {
    res.send("Hello World")
})

const port = process.env.PORT || 9000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})