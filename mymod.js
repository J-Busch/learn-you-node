var fs = require('fs');
var path = require('path');

module.exports = function (dir, ext, call) {
  fs.readdir(dir, (err, data) => {
    if (err) return call(err);
    else {
      data = data.filter(function (item) {
        if (path.extname(item) === '.' + ext) return true;
      });
      return call(null, data);
    }
  });
};
