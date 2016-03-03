var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('hello express');
});

app.get('/about', function(req, res) {
    res.send('About us page');
});


// console.log(__dirname + '\\public');
// app.use(express.static(__dirname + '\\public'));



app.listen(30000, function() {
    console.log("server working");
});
