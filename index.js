var APIBase = require("apibase-client");
var client = new APIBase({
    baseUrl: 'http://localhost:3000'
});


var GET_SQL = 'aa746210-294a-4e57-bff0-4ba05d948645';
module.exports = function(source, resourceType, cb) {
  client.invokeOperation(GET_SQL, source, null, null, function(err, result) {
    console.log(result);
    cb(err, result);
  })
}
