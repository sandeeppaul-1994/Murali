const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('./certs/private.key'),
  cert: fs.readFileSync('./certs/primary.crt')
};

https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('hello world\n');
}).listen(3020);
