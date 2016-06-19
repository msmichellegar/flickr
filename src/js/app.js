var React = require("react");
var ReactDOM = require("react-dom");

var App = React.createClass({
    render: function() {
        return (
            <div>
                <Nav />
                <Carousel image="http://www.libertyhotelslara.com/dosyalar/resimler/liberty-lara-hotel1.jpg" />
                <section id="images"></section>
            </div>
        );
    }
});

var Nav = React.createClass({
    render: function() {
        return (
            <nav>
                <h1>Photos</h1>
                <input type="text" placeholder="Search" id="search" />
                <img src="../public/images/search-icon.svg" />
            </nav>
        );
    }
});

var Grid = React.createClass({
    render: function() {
        var arrayOfImages = this.props.images;
        var tiles = arrayOfImages.map(function(arrayImage) {
            return <Tile image={arrayImage} />
        });

        return (
            <div id="grid">
                {tiles}
                <hr />
            </div>
        );
    }
});

var Carousel = React.createClass({
    render: function() {

        return (
            <div id="carousel">
                <img src={this.props.image} />
                <ShareButton />
                <hr />
            </div>
        );
    }
});

var ShareButton = React.createClass({
    render: function() {

        return (
            <div className="share-button">
                <button>SHARE</button>
            </div>
        );
    }
});

var Tile = React.createClass({
    render: function() {
        return (
            <div className="tile">
                <img src={this.props.image} />
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

            getPhotoUrls(data);

        }
    };

    request.send();

}

function getPhotoUrls(data) {
    var photoData = data.photos.photo;
    var urls = [];

    for (var i=0; i < photoData.length; i++) {
        var url = "https://farm" + photoData[i].farm + ".staticflickr.com/" + photoData[i].server + "/" + photoData[i].id + "_" + photoData[i].secret + ".jpg"

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

addSearchEventListener();
getPhotos("puppy");
