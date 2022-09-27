const nodemailer = require("nodemailer");
const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("Welcome to send Mail API");
});

app.post("/complaints", function (req, res) {
  res.send("Mail sended");

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });

  const mailOptions = {
    from: "vithostelplus@gmail.com",
    to: `${req.body.toEmail}`,
    subject: `${req.body.complaintHead} Complaint`,
    html: `<strong>Hostel : ${req.body.hostel} &nbsp; &nbsp; Floor : ${
      req.body.floor
    } &nbsp; &nbsp; Room Number : ${req.body.roomNo} </strong> <br> ${
      req.body.category
        ? `<br> <strong>Complaint category : ${req.body.category}</strong> <br>`
        : ""
    } <br> <strong>${
      req.body.complaint
    }</strong> <br> <br> <hr> <strong>Emailed by :</strong> <br> Name: ${
      req.body.fname
    } <br> Registration Number: ${req.body.id} <br> Email: ${
      req.body.userEmail
    } <hr> <br>`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
});

app.listen(process.env.PORT || "4000");
