var React = require("react");
var ReactDOM = require("react-dom");

var Tile = require("./tile.js");
var Carousel = require("./carousel.js");

var Grid = React.createClass({
    render: function() {
        var arrayOfImages = this.props.images;
        var counter = 0;

        var tiles = arrayOfImages.map(function(arrayImage) {
            counter++;

            return <Tile image={arrayImage} key={counter} id={counter} />
        });

        return (
            <div id="grid">
                {tiles}
                <hr />
            </div>
        );

    },

    componentDidMount: function() {
        var tileNodes = document.querySelectorAll(".tile img");
        var properties = this.props;

        for (var i=0; i < tileNodes.length; i++) {

            tileNodes[i].addEventListener("click", function() {
                var clickedImage = properties.images[this.id -1];

                ReactDOM.render(
                    <Carousel image={clickedImage} />,
                    document.getElementById("carousel")
                );

            });
        }

    },

    componentWillReceiveProps: function(newProps) {
        var tileNodes = document.querySelectorAll(".tile img");
        var properties = newProps;

        for (var i=0; i < tileNodes.length; i++) {

            tileNodes[i].addEventListener("click", function() {
                var clickedImage = properties.images[this.id -1];

                ReactDOM.render(
                    <Carousel image={clickedImage} />,
                    document.getElementById("carousel")
                );

            });
        }
    }
});

module.exports = Grid;
