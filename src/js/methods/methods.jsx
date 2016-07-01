var React = require("react");
var ReactDOM = require("react-dom");

var Carousel = require("../components/carousel.jsx");
var Grid = require("../components/grid.jsx");

var methods = {

    // gets photos from Flickr API and triggers rerender of carousel/grid
    getPhotos: function getPhotos(pageNumber, keyword) {
        var request = new XMLHttpRequest();

        request.open('GET', '/api/photos/' + pageNumber + "/" + keyword, true);

        request.onload = function() {
            if (request.status >= 200 && request.status < 400) {
                var data = JSON.parse(request.responseText);

                methods.renderCarousel(data, keyword);
                methods.renderGrid(data, keyword);

            }
        };

        request.send();

    },

    // identifies URLs for photos fetched from Flickr and triggers grid rerender
    getPhotoUrls: function getPhotoUrls(data) {
        var photoData = data.photos.photo;
        var urls = [];

        // for each chunk of photo data, constructs URL and pushes to array
        for (var i=0; i < photoData.length; i++) {
            var url = "https://farm" + photoData[i].farm + ".staticflickr.com/" + photoData[i].server + "/" + photoData[i].id + "_" + photoData[i].secret + "_m.jpg";

            urls.push(url);
        }

        return urls;

    },

    // rerenders carousel with given data from Flickr
    renderCarousel: function renderCarousel(data, keyword) {
        var photoData = data.photos.photo;
        var firstPhotoUrl = "https://farm" + photoData[0].farm + ".staticflickr.com/" + photoData[0].server + "/" + photoData[0].id + "_" + photoData[0].secret + "_n.jpg";

        // renders <Carousel />
        ReactDOM.render(
            <Carousel image={firstPhotoUrl} id="0" keyword={keyword} />,
            document.getElementsByClassName("carousel")[0]
        );
    },

    // renders or rerenders grid with given photo URLs
    renderGrid: function renderGrid(data, keyword) {
        var urls = methods.getPhotoUrls(data);
        var pageNumber = data.photos.page;

        // renders <Grid />
        ReactDOM.render(
          <Grid pageNumber={pageNumber} images={urls} theme={keyword} methods={methods} />,
          document.getElementById("images")
        );

    }

}

module.exports = methods;
