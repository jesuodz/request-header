'use strict';

const express = require('express'),
    app = express(),
    routes = require('./routes/routes.js'),
    path = require('path'),
    favicon = require('serve-favicon');

// Set engine
app.set('view engine', 'pug');

// Pretty links
app.use("/static", express.static(path.join(__dirname,('public'))));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

// Set routes
app.use('/', routes);
app.use('/api/whoami', routes);
app.use('*', routes);

const server = app.listen(3000, (request, response) => {
    console.log('Listening on port ' + server.address().port);
});