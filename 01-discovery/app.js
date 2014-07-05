var express = require('express')
  , http = require('http')
  , bodyParser = require('body-parser')
  , app = express()
  , http_port = 3000;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

app.listen(http_port);
console.log("Listening on " + http_port);
