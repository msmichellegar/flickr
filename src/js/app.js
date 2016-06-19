var React = require("react");
var ReactDOM = require("react-dom");

var arrayOfImages = ["https://www.royalcanin.com/~/media/Royal-Canin/Product-Categories/cat-adult-landing-hero.ashx", "http://www.hotel-r.net/im/hotel/es/michelle-1.jpg", "http://www.libertyhotelslara.com/dosyalar/resimler/liberty-lara-hotel1.jpg", "https://tctechcrunch2011.files.wordpress.com/2015/08/clouds.jpg", "http://wallpaperlayer.com/img/2015/8/high-tech-wallpaper-3430-3639-hd-wallpapers.jpg", "https://www.royalcanin.com/~/media/Royal-Canin/Product-Categories/cat-adult-landing-hero.ashx", "http://www.hotel-r.net/im/hotel/es/michelle-1.jpg", "http://www.libertyhotelslara.com/dosyalar/resimler/liberty-lara-hotel1.jpg"];

var App = React.createClass({
    render: function() {
        return (
            <div>
                <Nav />
                <div id="grid"></div>
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
      document.getElementById("grid")
    );
}

addSearchEventListener();
