var connector = require('./index.js');

var SOURCE = {
    "key": "...",
    "param": "..."
 };
 var TARGET_RESOURCE_TYPE = "gtable";

connector(SOURCE, TARGET_RESOURCE_TYPE, function(err, result) {
  if (err) {
    console.error(err);
    return;
  }
  console.log(result);
});
