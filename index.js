var APIBase = require("apibase-client");
var client = new APIBase({
    baseUrl: 'http://johnsd.cse.unsw.edu.au:3000'
});


var GET_YQL = '45df6b25-94a7-4713-be1e-8c57de8f6b4c';
module.exports = function(source, resourceType, cb) {
  client.invokeOperation(GET_YQL, source, null, null, function(err, result) {
    cb(err, result.body);
  });
};
