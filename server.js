var express = require('express');
var bodyParser = require('body-parser')
var app = express();

//serve static assets
app.use(express.static(__dirname));

app.listen(7000, function () {
  console.log('Example app listening on port 7000!');
});
