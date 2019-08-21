const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const twilio = require("twilio");

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const PORT = 3000;

const client = new twilio(accountSid, authToken);

phrases = [
  "Tell me a joke",
  "Tell me a joke",
  "I'd like to hear a joke",
  "Do you know any good jokes?",
  "Joke",
  "Tell joke",
  "Tell me something funny",
  "Make me laugh",
  "I want to hear a joke",
  "Can I hear a joke?",
  "I like jokes",
  "I'd like to hear a punny joke"
];

phrases.forEach(function(item) {
  sample = client.autopilot
    .assistants("UA67ad459451ae8ab1cbb7ff598da1be5d")
    .tasks("tell-a-joke")
    .samples.create({
      language: "en-us",
      taggedText: item
    })
    .then(sample => console.log(sample.sid))
    .done();
});
