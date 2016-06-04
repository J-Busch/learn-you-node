var mymod = require('./mymod.js');

var call = function (err, data) {
  if (err) throw err;
  for (var i=0; i<data.length; i++) {
    console.log(data[i]);
  }
}

mymod(process.argv[2], process.argv[3], call);
