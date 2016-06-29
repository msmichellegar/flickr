var Flickr = require("flickrapi"),
    flickrOptions = {
        api_key: process.env.FLICKR_KEY,
        secret: process.env.FLICKR_SECRET,
        progress: false
    };

module.exports = {

    // fetches photos from flickr API for specific page and keyword
    getPhotos: function getPhotos(pageNumber, searchTerm, callback) {

        // creates flickr object to make API call
        Flickr.tokenOnly(flickrOptions, function(error, flickr) {

            // makes API call and returns results
            flickr.photos.search({
                text: searchTerm,
                page: pageNumber,
                per_page: 15,
                safe_search: 1

            }, function(err, result) {

                if (err) {
                    callback(err, null);

                } else {
                    callback(null, result);

                }

            });

        });

    }

};
