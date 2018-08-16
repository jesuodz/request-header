'use strict';

const router = require('express').Router(),
    requestHeader = require('../api/request-header.js');

router.route('/').get((request, response) => {
    let data = requestHeader.parseHeader(request);
    response.render('index', {"title": "API Project: Request Header Parser Microservice", requestData: JSON.stringify(data)});
});
router.route('/api/whoami').get((request, response) => {
    response.send(requestHeader.parseHeader(request));
});

router.route('*').get((request, response) => {
    response.render('error-template', {"title": "Yikes!", "goback": "Maybe you want to go back to main page"});
});

module.exports = router;