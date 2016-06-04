var fs = require('fs');
var arr = fs.readFileSync(process.argv[2]).toString().split('\n').length;
console.log(arr-1);
