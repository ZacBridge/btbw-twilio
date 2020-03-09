const express = require('express')
const VoiceResponse = require('twilio').twiml.VoiceResponse
const urlencoded = require('body-parser').urlencoded;
const app = express()
const port = 3000

const MODERATOR = '+447730789650';


app.use(urlencoded({ extended: false }));

app.post('/', (request, response) => {

    console.log(request.body)

    const twiml = new VoiceResponse();

    const dial = twiml.dial();

    if (request.body.From == MODERATOR) {
        dial.conference('My conference', {
          startConferenceOnEnter: true,
          endConferenceOnExit: true,
        });
      } else {
        // Otherwise have the caller join as a regular participant
        dial.conference('My conference', {
          startConferenceOnEnter: false,
        });
      }
    
      // Render the response as XML in reply to the webhook request
      response.type('text/xml');

      response.send(twiml.toString())
})


app.post('/voice-call', (request, response) => {

    console.log(request.body)

    const twiml = new VoiceResponse();

    const dial = twiml.dial();

    if (request.body.From == MODERATOR) {
        dial.conference('My conference', {
          startConferenceOnEnter: true,
          endConferenceOnExit: true,
        });
      } else {
        // Otherwise have the caller join as a regular participant
        dial.conference('My conference', {
          startConferenceOnEnter: false,
        });
      }
    
      // Render the response as XML in reply to the webhook request
      response.type('text/xml');

      response.send(twiml.toString())
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))