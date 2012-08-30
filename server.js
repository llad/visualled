// simple node.js server for situations where a server is interesting.


var port = process.env.PORT || 80;
var express = require('express');
var app = express();

app.get('/data', function(req, res){
    res.send(getStatsInfoJson());
});

app.use(express.static(__dirname + '/public'));

app.listen(port);

function getStatsInfoJson() {
    return {
        "data" : [232, 242, 32, 342, 100, 96]
    };
}