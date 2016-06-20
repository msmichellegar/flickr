var React = require("react");
var ReactDOM = require("react-dom");

var Nav = require("./components/nav.js");
var Carousel = require("./components/carousel.js");
var Grid = require("./components/grid.js");

var App = React.createClass({
    render: function() {
        return (
            <div>
                <Nav />
                <Carousel image="http://www.sobserver.ws/themes/publication_10/theme_1/assets/img/loading.gif" />
                <section id="images"></section>
            </div>
        );
    }
});

ReactDOM.render(
  <App />,
  document.getElementById("app")
);

function addSearchEventListener() {
    var searchNode = document.getElementById("search");

    searchNode.addEventListener("keydown", function(event){

        if (event.keyCode === 13) {
            var searchTerm = searchNode.value;

            getPhotos(searchTerm);

        }

    });
}

function getPhotos(keyword) {
    var request = new XMLHttpRequest();

    request.open('GET', '/api/photos/' + keyword, true);

    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            var data = JSON.parse(request.responseText);

            renderCarousel(data);
            getPhotoUrls(data);

        }
    };

    request.send();

}

function getPhotoUrls(data) {
    var photoData = data.photos.photo;
    var urls = [];

    for (var i=0; i < photoData.length; i++) {
        var url = "https://farm" + photoData[i].farm + ".staticflickr.com/" + photoData[i].server + "/" + photoData[i].id + "_" + photoData[i].secret + ".jpg";

        urls.push(url);
    }

    renderGrid(urls);

}

function renderGrid(urls) {
    ReactDOM.render(
      <Grid images={urls} />,
      document.getElementById("images")
    );
}

function renderCarousel(data) {
    var photoData = data.photos.photo;
    var url = "https://farm" + photoData[0].farm + ".staticflickr.com/" + photoData[0].server + "/" + photoData[0].id + "_" + photoData[0].secret + ".jpg";

    ReactDOM.render(
        <Carousel image={url} />,
        document.getElementById("carousel")
    );
}

addSearchEventListener();
getPhotos("puppy");
