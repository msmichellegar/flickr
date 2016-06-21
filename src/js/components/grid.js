var React = require("react");
var ReactDOM = require("react-dom");

var methods = require("../methods/methods.js");

var Tile = require("./tile.js");
var Carousel = require("./carousel.js");
var Pagination = require("./pagination.js");

console.log("in grid", methods)

var Grid = React.createClass({

    render: function() {
        var arrayOfImages = this.props.images;
        var counter = -1;

        var tiles = arrayOfImages.map(function(arrayImage) {
            counter++;

            return <Tile image={arrayImage} key={counter} id={counter} />
        });

        return (
            <div id="grid">
                {tiles}
                <Pagination searchTerm={this.props.theme} />
                <hr />
            </div>
        );

    },

    componentDidMount: function() {
        var properties = this.props;

        enableCarouselDisplay(properties);

    },

    componentWillReceiveProps: function(newProps) {
        var tileNodes = document.querySelectorAll(".tile img");
        var properties = newProps;

        enableCarouselDisplay(properties);
    }
});


// adds event listeners to grid tiles
function enableCarouselDisplay(properties) {
    var tileNodes = document.querySelectorAll(".tile img");

    for (var i=0; i < tileNodes.length; i++) {

        // captures click event and determines image clicked on
        tileNodes[i].addEventListener("click", function() {
            var clickedImage = properties.images[this.id];

            // renders carousel main image as clicked tile
            ReactDOM.render(
                <Carousel image={clickedImage} />,
                document.getElementById("carousel")
            );

        });
    }
}

module.exports = Grid;
