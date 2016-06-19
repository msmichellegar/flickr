var Flickr = require("flickrapi"),
    flickrOptions = {
        api_key: process.env.FLICKR_KEY,
        secret: process.env.FLICKR_SECRET,
        progress: false
    };

// gets flickr photos for given search term
function getPhotos(searchTerm) {
    var keyword = "flower";

    Flickr.tokenOnly(flickrOptions, function(error, flickr) {

        flickr.photos.search({
            text: keyword,
            page: 1,
            per_page: 10
        }, function(err, result) {

            console.log(result);
        });
    });

}

// getPhotos();
