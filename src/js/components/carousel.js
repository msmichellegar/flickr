var React = require("react");
var ReactDOM = require("react-dom");

var ShareButton = require("./sharebutton.js");

var Carousel = React.createClass({
    render: function() {

        return (
            <div id="carousel">
                <img className="carousel-image" src={this.props.image} />
                <ShareButton />
                <hr />
            </div>
        );
    }
});

module.exports = Carousel;
