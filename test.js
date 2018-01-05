var connector = require('./index.js');

var SOURCE = {
  q: "select * from geo.places where text='sunnyvale'"
};
var TARGET_RESOURCE_TYPE = "";

connector(SOURCE, TARGET_RESOURCE_TYPE, function(err, result) {
  if (err) {
    console.error(err);
    return;
  }
  console.log(result);
});
