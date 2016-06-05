var http = require('http');
var url = require('url');
var port = process.argv[2];

var opts = {
  '/api/parsetime': function (pUrl, d) {
    return {
      hour: d.getHours(),
      minute: d.getMinutes(),
      second: d.getSeconds()
    };
  },

  '/api/unixtime': function(pUrl, d) {
    return {
      unixtime: d.getTime()
    };
  }
}

var server = http.createServer(function (req, res) {
  var pUrl = url.parse(req.url, true);
  var opt = opts[pUrl.pathname];
  var time = new Date(pUrl.query.iso);
  if (opt) {
    res.writeHead(200, { 'Content-Type' : 'application/JSON' });
    res.end(JSON.stringify(opt(pUrl, time)));
  }
  else {
    res.writeHead(404);
    res.end();
  }
});
server.listen(port);
