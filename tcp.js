var net = require('net');
var port = process.argv[2];

function zer(num) {
  if (num < 10) {
    return '0' + num;
  }
  return num;
}

var server = net.createServer(function (socket) {
  d = new Date();
  var result = d.getFullYear() + '-' +
	       zer(d.getMonth()+1) + '-' +
	       zer(d.getDate()) + ' ' +
	       d.getHours() + ':' +
	       d.getMinutes() + '\n';

  socket.end(result);
});

server.listen(port);
