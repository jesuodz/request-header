'use strict';

const router = require('express').Router(),
    requestHeader = require('../api/request-header.js');

router.route('/').get(requestHeader.index);
router.route('/api/whoami').get(requestHeader.whoami);

router.route('*').get((request, response) => {
    response.render('error-template', {"title": "Yikes!", "goback": "Maybe you want to go back to main page"});
});

module.exports = router;