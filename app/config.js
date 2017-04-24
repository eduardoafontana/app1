var URL = require('url');
var config = {};
config.port = process.env.PORT || 2426;
config.baseUri = process.env.BASE_URI || 'http://localhost:' + config.port;
module.exports = config;
