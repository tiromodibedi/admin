/**
 * import dependencies for our server app
 */
const express = require('express');
const logger  = require('morgan')
const http    = require('http');
const path    = require('path');

/**
 * create an express server app
 */
const app = express();

/**
 * set the port
 */
const port = process.env.PORT || 3000;

/**
 * use morgan for logging results
 */
app.use(logger("dev"));

/**
 * configure server app to serve index.html in dist folder
 */
app.use(express.static(path.join(__dirname, '../public')));
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
})

/**
 * set the port
 */
app.set('port', port);

/**
 * create an http server and run it
 */
const server = http.createServer(app);
server.listen(app.get('port'), function () {
  console.log('running on port', app.get('port'));
});
