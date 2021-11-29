const express = require("express")
const mongoose = require("mongoose")
const app = express()
const cors = require("cors")

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send("hello world")
})

const PORT = 3001

app.listen(process.env.PORT || PORT, () => {
    console.log("running")
})