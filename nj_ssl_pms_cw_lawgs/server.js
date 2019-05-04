var express = require('express')
var fs = require('fs')
var https = require('https')
var app = express()
var lawgs = require('./index');
lawgs.config({
	aws: {
	accessKeyId: process.env.acckey,
	secretAccessKey: process.env.seckey,
        region: 'us-east-1'
	}
});

app.get('/abc/a2b/v1/apple/accounts', function (req, res) {
  res.send('accounts')
  var logger  = lawgs.getOrCreate('fgnodejsloggroup'); /* LogGroup */
  logger.log('abca2bdevqa', { team: 'apple accounts', weight: 7 });
})
app.get('/abc/a2b/v1/apple/contacts', function (req, res) {
  res.send('contacts')
  var logger  = lawgs.getOrCreate('fgnodejsloggroup'); /* LogGroup */
  logger.log('abca2bdevqa', { team: 'apple contacts', weight: 9 });
})
app.get('/abc/a2b/v1/apple/leads', function (req, res) {
  res.send('leads')
  var logger  = lawgs.getOrCreate('fgnodejsloggroup'); /* LogGroup */
  logger.log('abca2bdevqa', { team: 'leads', weight: 11 });
})



https.createServer({
  key: fs.readFileSync('certs/private.key'),
  cert: fs.readFileSync('certs/primary.crt')
}, app)
.listen(3015, function () {
  console.log('Example app listening on port 3015! Go to https://localhost:3015/')
})
