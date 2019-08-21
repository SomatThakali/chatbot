const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const twilio = require("twilio");

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const PORT = 3000;

const client = new twilio(accountSid, authToken);

query = client.autopilot
  .assistants("UA67ad459451ae8ab1cbb7ff598da1be5d")
  .queries.create({
    language: "en-US",
    query: "Tell me a joke"
  })
  .then(query => console.log(query.results.task))
  .done();
