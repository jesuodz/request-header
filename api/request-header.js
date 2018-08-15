'use strict';

module.exports = {
    data: function(request, response) {
        const header = request.headers;
    
        const data = {
            "ipaddress": header['x-forwarded-for'],
            "language": header["accept-language"],
            "software": header["user-agent"]
        }
        response.render('index', {requestData : JSON.stringify(data)});
    }
}