var Flickr = require("flickrapi"),
    flickrOptions = {
        api_key: process.env.FLICKR_KEY,
        secret: process.env.FLICKR_SECRET,
        progress: false
    };

module.exports = {

    getPhotos: function getPhotos(pageNumber, searchTerm, callback) {

        Flickr.tokenOnly(flickrOptions, function(error, flickr) {

            flickr.photos.search({
                text: searchTerm,
                page: pageNumber,
                per_page: 15

            }, function(err, result) {

                if (err) {
                    callback(err, null);

                } else {
                    callback(null, result);

                }

            });

        });

    }

}
