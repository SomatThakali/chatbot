const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const twilio = require("twilio");

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const PORT = 3000;

const client = new twilio(accountSid, authToken);

helloWorldTaskActions = {
  actions: [
    { say: "Hi there, I'm your virtual assistant! How can I help you?" },
    { listen: true }
  ]
};
// UDe36f334ef68e807844243f36b8c7a75b
client.autopilot
  .assistants("UA67ad459451ae8ab1cbb7ff598da1be5d")
  .tasks.create({
    uniqueName: "hello-world",
    actions: helloWorldTaskActions
  })
  .then(assistant => console.log(assistant.sid))
  .done();

app.listen(PORT, function() {
  console.log("App listening on http://localhost:" + PORT);
});
