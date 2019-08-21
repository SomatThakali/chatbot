const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const twilio = require("twilio");

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const PORT = 3000;

const client = new twilio(accountSid, authToken);

jokeActions = {
  actions: [
    {
      say:
        "I was going to look for my missing watch, but I could never find the time."
    }
  ]
};

task = client.autopilot
  .assistants("UA67ad459451ae8ab1cbb7ff598da1be5d")
  .tasks.create({
    uniqueName: "tell-a-joke",
    actions: jokeActions
  })
  .then(task => console.log(task.sid))
  .done();
