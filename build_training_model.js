const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const twilio = require("twilio");

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const PORT = 3000;

const client = new twilio(accountSid, authToken);
// UGf8ef5b4055f7159dd80b7d685ea7fdac
client.autopilot
  .assistants("UA67ad459451ae8ab1cbb7ff598da1be5d")
  .modelBuilds.create({ uniqueName: "v0.1" })
  .then(model_build => console.log(model_build.sid));
