var React = require("react");
var ReactDOM = require("react-dom");

var Tile = require("./tile.js");
var Carousel = require("./carousel.js");

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
                <p className="pagination">
                    <a>&#60;&#60;</a><a>&#60;</a><a>1</a><a>2</a><a>3</a><a>4</a><a>5</a><a>6</a><a>&#62;&#62;</a><a>&#62;</a>
                </p>
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
