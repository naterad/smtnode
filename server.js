var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/test', function(req, res) {
	res.send({'status':'success','data':'this is finally working'});
});

app.listen(8080);

