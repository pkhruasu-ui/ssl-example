var fs = require('fs'),
    http = require('http'),
    https = require('https'),
    express = require('express');

var port = 8000;

var options = {
    key: fs.readFileSync('./ssl/key.pem'),	// private key
    cert: fs.readFileSync('./ssl/cert.pem'),	// certificate
    passphrase: 'prajak'	// passphrase used to generate above pem
};

var app = express();

var server = https.createServer(options, app).listen(port, function(){
  console.log("Express server listening on port " + port);
});

app.get('/', function (req, res) {
    res.writeHead(200);
    res.end("hello world\n");
});