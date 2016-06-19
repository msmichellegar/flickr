var flickr = require("./flickr.js");

module.exports = {

    home: function(request, reply) {
        reply.file('./public/index.html');
    },

    api: function(request, reply) {
        var query = request.url.pathname.split("/")[3];

        if (query === "photos") {
            console.log("photos");
        }

    }

};
