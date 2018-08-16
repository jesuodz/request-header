'use strict';

module.exports = {
    parseHeader: (request) => {
        const header = request.headers;
        const data = {
            "ipaddress": header['x-forwarded-for'].split(',')[0],
            "language": header["accept-language"],
            "software": header["user-agent"]
        }
        return data;
    }
};