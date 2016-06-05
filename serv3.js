var http = require('http');
var bl = require('bl');
var fin = [];
var inc = 0;
var argLen = process.argv.length - 2;

function getHttp (index) {
  http.get(process.argv[2+index], (res) => {
    res.pipe(bl(function (err, data) {
      if (err) return console.error(err);

      fin[index] = data.toString();
      inc++;

      if (inc === argLen) {
        for (var j=0; j<argLen; j++) {
          console.log(fin[j]);
        }
      }
    }))
  })
}

for (var i=0; i<argLen; i++) {
  getHttp(i);
}
