var connector = require('./index.js');

connector({}, null, function(err, result) {
  console.log(result);
});
