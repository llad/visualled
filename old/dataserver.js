// This is a dataserver that doesn't use express.

var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(getStatsInfoJson()));
}).listen(process.env.PORT, process.env.IP);
console.log('Server running at ' + process.env.PORT + ' ' + process.env.IP);



function getStatsInfoJson() {
    return {
        "statinfo": {
            "type":"bar",
            "category":"parcelslast6",
            "data" : [232, 242, 32, 342, 100, 98]
        }
    };
}
