const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const app = express();
const twilio = require("twilio");

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const dbuser = process.env.MONGODB_USER;
const password = process.env.MONGODB_PASSWORD;
const PORT = 3000;

const client = new twilio(accountSid, authToken);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
mongoose
  .connect(
    `mongodb+srv://${dbuser}:${password}@cluster0-fiqw0.mongodb.net/test?retryWrites=true&w=majority`,
    { useMongoClient: true }
  )
  .then(() => {
    console.log("db connected");
  });

app.get("/", (req, res) => {
  res.end();
});

app.listen(PORT, function() {
  console.log("App listening on http://localhost:" + PORT);
});
