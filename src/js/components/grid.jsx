var React = require("react");
var ReactDOM = require("react-dom");

var Tile = require("./tile.jsx");
var Carousel = require("./carousel.jsx");
var Pagination = require("./pagination.jsx");

var Grid = React.createClass({

    render: function() {
        var arrayOfImages = this.props.images;
        var counter = -1;
        var searchTerm = this.props.theme;

        var pageNumberId = "page-" + this.props.pageNumber;

        var tiles = arrayOfImages.map(function(arrayImage) {
            counter++;

            return <Tile searchTerm={searchTerm} image={arrayImage} key={counter} id={counter} />;
        });

        return (
            <div className="grid" id={pageNumberId}>
                {tiles}
                <Pagination searchTerm={searchTerm} methods={this.props.methods} />
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

        // on click
        tileNodes[i].addEventListener("click", function() {
            var clickedImage = properties.images[this.id];

            // renders carousel main image as clicked tile
            ReactDOM.render(
                <Carousel image={clickedImage} id={this.id} />,
                document.getElementsByClassName("carousel")[0]
            );

        });
    }
}

module.exports = Grid;
