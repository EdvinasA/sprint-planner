var http = require('http');
var mock = require('mockserver');

http.createServer(mock('api')).listen(8080);
