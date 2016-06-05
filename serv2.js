var http = require('http');
var url = process.argv[2];
var hold = [];

http.get(url, (res) => {
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    hold.push(chunk);
  });
  res.on('error', console.error);
  res.on('end', () => {
    console.log(hold.join('').length);
    console.log(hold.join(''));
  });
});
