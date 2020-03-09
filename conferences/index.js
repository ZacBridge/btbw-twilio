var accountSid = 'ACbcfb9d616b5d8417e09416a92f426801'; // Your Account SID from www.twilio.com/console
var authToken = 'c9fb499adbb0ca533503bfbb0b940af2';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

client.calls.create({
         url: 'http://demo.twilio.com/docs/voice.xml',
         to: '+447730789650',
         from: '+441252236388'
       })
      .then(call => console.log(call.sid));