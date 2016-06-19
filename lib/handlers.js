var flickr = require("./flickr.js");

module.exports = {

    home: function(request, reply) {
        reply.file('./public/index.html');
    },

    api: function(request, reply) {
        var query = request.url.pathname.split("/")[2];
        var queryInfo = request.url.pathname.split("/")[3];

        if (query === "photos") {

            flickr.getPhotos(queryInfo, function(err, data) {
                if (err) {
                    reply(err);

                } else {
                    console.log("results", data);
                    reply(data);

                }

            })

        }

    }

};
