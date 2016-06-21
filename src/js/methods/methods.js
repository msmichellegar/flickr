var React = require("react");
var ReactDOM = require("react-dom");

var Carousel = require("../components/carousel.js");
var Grid = require("../components/grid.js");

var methods = {

    getPhotos: function getPhotos(pageNumber, keyword) {
        var request = new XMLHttpRequest();

        request.open('GET', '/api/photos/' + pageNumber + "/" + keyword, true);

        request.onload = function() {
            if (request.status >= 200 && request.status < 400) {
                var data = JSON.parse(request.responseText);

                methods.renderCarousel(data);
                methods.getPhotoUrls(data, keyword);

            }
        };

        request.send();

    },

    getPhotoUrls: function getPhotoUrls(data, keyword) {
        var photoData = data.photos.photo;
        var urls = [];

        for (var i=0; i < photoData.length; i++) {
            var url = "https://farm" + photoData[i].farm + ".staticflickr.com/" + photoData[i].server + "/" + photoData[i].id + "_" + photoData[i].secret + ".jpg";

            urls.push(url);
        }

        methods.renderGrid(urls, keyword);

    },

    renderGrid: function renderGrid(urls, keyword) {

        ReactDOM.render(
          <Grid images={urls} theme={keyword} />,
          document.getElementById("images")
        );

    },

    renderCarousel: function renderCarousel(data) {
        var photoData = data.photos.photo;
        var firstPhotoUrl = "https://farm" + photoData[0].farm + ".staticflickr.com/" + photoData[0].server + "/" + photoData[0].id + "_" + photoData[0].secret + ".jpg";

        ReactDOM.render(
            <Carousel image={firstPhotoUrl} id="0" />,
            document.getElementById("carousel")
        );
    }

};

module.exports = methods;
