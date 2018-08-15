'use strict';

const express = require('express'),
    app = express(),
    requestHeader = require('./api/request-header.js'),
    router = express.Router(),
    path = require('path');

// Set engine
app.set('view engine', 'pug');

// Pretty links
app.use("/static", express.static(path.join(__dirname,('public'))));

// Set routes — All in one file
router.route('/').get(requestHeader.data);
app.use('/', router);

// All non-routes
app.get('*', (request, response) => {
    response.render('error-template', {"title": "Yikes!", "goback": "Maybe you want to go back to main page"});
})

const server = app.listen(3000, (request, response) => {
    console.log('Listening on port ' + server.address().port);
});