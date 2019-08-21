const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const twilio = require("twilio");

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const PORT = 3000;

const client = new twilio(accountSid, authToken);

phrases = [
  "hello",
  "hi",
  "Hello",
  "Hi there",
  "It’s nice to meet you.",
  "Good morning",
  "Good afternoon"
];

// UF1d827094ece7be0b17b6840ce9046615
// UF356bb5b4595e22ed2e53f2151eb6ec4c
// UF69c4848307c3224ae66de17898cc60dc
// UF6992b78b6151684940e691ad9221686d
// UF60af4ff4b2bf4ebf89ea5b5cefe0b289
// UF32219988427ec7e542eeb2fc276fd814
// UF1a10f051626177d683f580d3bb2502d6

phrases.forEach(function(item) {
  sample = client.autopilot
    .assistants("UA67ad459451ae8ab1cbb7ff598da1be5d")
    .tasks("hello-world")
    .samples.create({
      language: "en-us",
      taggedText: item
    })
    .then(sample => console.log(sample.sid))
    .done();
});
