var express = require('express');
var app = express();

app.get('/data', function(req, res){
    res.send(getStatsInfoJson());
});

app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT, process.env.IP);

function getStatsInfoJson() {
    return {
        "data" : [232, 242, 32, 342, 100, 98]
    };
}