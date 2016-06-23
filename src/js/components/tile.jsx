var React = require("react");
var ReactDOM = require("react-dom");

var Carousel = require("./carousel.jsx");
var Pagination = require("./pagination.jsx");

var Tile = React.createClass({
    render: function() {

        return (

            <div className="tile">
                <img src={this.props.image} id={this.props.id} alt={this.props.keyword} />
            </div>
        );
    }
});

module.exports = Tile;
