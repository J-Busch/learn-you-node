var fs = require('fs');
var http = require('http');
var port = process.argv[2];
var url = process.argv[3];

var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type' : 'plain/text' });
  fs.createReadStream(url).pipe(res);
})
server.listen(port);
