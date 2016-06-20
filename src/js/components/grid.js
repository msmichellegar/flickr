var React = require("react");
var ReactDOM = require("react-dom");

var Tile = require("./tile.js");

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

module.exports = Grid;
