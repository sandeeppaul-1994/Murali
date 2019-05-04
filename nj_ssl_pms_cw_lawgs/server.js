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
// multiple folder path was used here for testing.
app.get('/abc/a2b/v1/apple/address', function (req, res) {
  res.send('accounts')
	// fgnodejsloggroup should be created in CloudWatch log group earlier. 
	// lawgs.getOrCreate was observed as not creating the log group
  var logger  = lawgs.getOrCreate('fgnodejsloggroup'); /* LogGroup */
	// abca2bdevqa is the log stream name used to store logs
  logger.log('abca2bdevqa', { team: 'apple address', weight: 7 });
})
app.get('/abc/a2b/v1/apple/contacts', function (req, res) {
  res.send('contacts')
  var logger  = lawgs.getOrCreate('fgnodejsloggroup'); /* LogGroup */
  logger.log('abca2bdevqa', { team: 'apple contacts', weight: 9 });
})
app.get('/abc/a2b/v1/apple/customers', function (req, res) {
  res.send('leads')
  var logger  = lawgs.getOrCreate('fgnodejsloggroup'); /* LogGroup */
  logger.log('abca2bdevqa', { team: 'customers', weight: 11 });
})



https.createServer({
  key: fs.readFileSync('certs/private.key'),
  cert: fs.readFileSync('certs/primary.crt')
}, app)
.listen(3015, function () {
  console.log('Example app listening on port 3015! Go to https://localhost:3015/')
})
