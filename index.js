var APIBase = require("apibase-client");
var client = new APIBase({
    baseUrl: 'http://johnsd.cse.unsw.edu.au:3000'
});


var GET_SQL = 'aa746210-294a-4e57-bff0-4ba05d948645';
module.exports = function(source, resourceType, cb) {
  client.invokeOperation(GET_SQL, source, null, null, function(err, result) {
    try {
      var table = JSON.parse(result.body);
      cb(err, table);
    } catch (e) {
      cb(e);
    }
  });
};
