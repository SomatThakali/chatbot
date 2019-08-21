const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const twilio = require("twilio");

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const PORT = 3000;

const client = new twilio(accountSid, authToken);

client.autopilot
  .assistants("UA67ad459451ae8ab1cbb7ff598da1be5d")
  .defaults()
  .update({
    defaults: {
      defaults: {
        assistant_initiation: "task://hello-world",
        fallback: "task://hello-world"
      }
    }
  })
  .then(defaults => console.log(defaults.assistantSid));
