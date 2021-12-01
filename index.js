const express = require("express")
const mongoose = require("mongoose")
const app = express()
const cors = require("cors")
const nodemailer = require("nodemailer")

app.use(cors())
app.use(express.json())

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
    user: "paswiseorg@gmail.com",
    pass: "HTO#WW7tm08-$e5"
    }
});

function sendMails(recipients, subject, text) {
    for (var x of recipients) {
        const mailOptions = {
            from: "paswiseorg@gmail.com",
            to: x,
            subject: subject,
            text: text,
        };
    
        transporter.sendMail(mailOptions, (err) => {
            if (err) {
                console.log(err)
            }
        })
    }
}

app.get("/", (req, res) => {
    sendMails(["stackediego@gmail.com", "chp@bunbrew.com", "vik@bunbrew.com"], "nodemailertest", "test")
    res.send("hello world")
})

const PORT = 3001

app.listen(process.env.PORT || PORT, () => {
    console.log("running")
})