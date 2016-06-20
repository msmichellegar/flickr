var React = require("react");
var ReactDOM = require("react-dom");

var Tile = React.createClass({
    render: function() {
        return (
            <div className="tile">
                <img src={this.props.image} id={this.props.id} />
            </div>
        );
    }
});

module.exports = Tile;
