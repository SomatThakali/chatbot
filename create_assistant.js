const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const twilio = require("twilio");

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const PORT = 3000;

const client = new twilio(accountSid, authToken);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// UA67ad459451ae8ab1cbb7ff598da1be5d
client.autopilot.assistants
  .create({
    friendlyName: "SpotifyBot",
    logQueries: true,
    uniqueName: "songs"
  })
  .then(assistant => console.log(assistant.sid));

app.listen(PORT, function() {
  console.log("App listening on http://localhost:" + PORT);
});
