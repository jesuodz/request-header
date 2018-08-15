'use strict';

const express = require('express'),
    app = express();

app.get('/', (request, response) => {
    const header = request.headers;

    const data = {
        "ipaddress": header['x-forwarded-for'],
        "language": header["accept-language"],
        "software": header["user-agent"]
    }
    console.log(data);
});

const server = app.listen(3000, (request, response) => {
    console.log('Listening on port ' + server.address().port);
});