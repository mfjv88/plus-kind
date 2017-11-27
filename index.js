var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var port = process.argv[2] || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true}));

app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(port, function(){
  console.log('Listening to ' + port);
})
