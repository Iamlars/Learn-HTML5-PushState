var express = require('express');
var app = express();

app.use(express.static(__dirname+"/"));

app.get([
  '/',
  '/about.html',
  '/intro.html',
  '/empoly.html'
], function(req, res){
    res.sendFile(__dirname + '/index.html');
});


app.listen(1999, function(){
    console.log('listening on *:3030');
});
