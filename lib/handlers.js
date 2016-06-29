var flickr = require("./flickr.js");

module.exports = {

    // serves index.html on homepage
    home: function(request, reply) {
        reply.file('./public/index.html');

    },

    // routes api calls according to path
    api: function(request, reply) {
        var firstQuery = request.url.pathname.split("/")[2];
        var secondQuery = request.url.pathname.split("/")[3];
        var thirdQuery = request.url.pathname.split("/")[4];

        // if first query is photos
        if (firstQuery === "photos") {

            // calls flickr getPhotos method with given search queries
            flickr.getPhotos(secondQuery, thirdQuery, function(err, data) {

                if (err) {
                    reply(err);

                } else {
                    reply(data);

                }

            });

        }

    }

};
