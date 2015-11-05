var express = require('express');
var app = express();

app.use(express.static(__dirname+"/"));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/about.html', function(req, res){
    res.sendFile(__dirname + '/index.html');
});
app.get('/intro.html', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/empoly.html', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.listen(3030, function(){
    console.log('listening on *:3030');
});