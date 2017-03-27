var app = require('./app');
var debug = require('debug')('ton:server');
var http = require('http');

/**
 * Get port from environment and store in Express.
 */
var port = 3000;
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

