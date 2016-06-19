var React = require("react");
var ReactDOM = require("react-dom");

var arrayOfImages = ["https://www.royalcanin.com/~/media/Royal-Canin/Product-Categories/cat-adult-landing-hero.ashx", "http://www.hotel-r.net/im/hotel/es/michelle-1.jpg", "http://www.libertyhotelslara.com/dosyalar/resimler/liberty-lara-hotel1.jpg", "https://tctechcrunch2011.files.wordpress.com/2015/08/clouds.jpg", "http://wallpaperlayer.com/img/2015/8/high-tech-wallpaper-3430-3639-hd-wallpapers.jpg", "https://www.royalcanin.com/~/media/Royal-Canin/Product-Categories/cat-adult-landing-hero.ashx", "http://www.hotel-r.net/im/hotel/es/michelle-1.jpg", "http://www.libertyhotelslara.com/dosyalar/resimler/liberty-lara-hotel1.jpg"];

var App = React.createClass({
    render: function() {
        return (
            <div>
                <Nav />
                <Grid />
            </div>
        );
    }
});

var Nav = React.createClass({
    render: function() {
        return (
            <nav>
                <h1>Photos</h1>
                <input type="text" placeholder="Search" />
                <img src="./images/search-icon.svg" />
            </nav>
        );
    }
});

var Grid = React.createClass({
    render: function() {
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
