'use strict';

const express = require('express'),
    app = express(),
    requestHeader = require('./api/request-header.js'),
    router = express.Router();


app.set('view engine', 'pug');

// Set routes — All in one file
router.route('/').get(requestHeader.data);
app.use('/', router);

// All non-routes
app.get('*', (request, response) => {
    response.render('error-template', {"message": "Error!", "goback": "maybe you want to go back to index"});
})

const server = app.listen(3000, (request, response) => {
    console.log('Listening on port ' + server.address().port);
});