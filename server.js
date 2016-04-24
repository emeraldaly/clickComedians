var express = require('express');
var app = express();
var logger= require('morgan');
var PORT = process.env.PORT || 8080;

app.use(logger('dev'));
app.use(express.static(__dirname + "/public"));

app.get('*', function(req, res) {
  res.sendFile(process.cwd() + '/public/clickface.html');
});

app.listen(PORT, function(){
  console.log("listening on PORT:" + PORT);
});