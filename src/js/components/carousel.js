var React = require("react");
var ReactDOM = require("react-dom");

var ShareButton = require("./sharebutton.js");

var Carousel = React.createClass({
    render: function() {

        return (
            <div id="carousel">
                <img className="arrow" src="../public/images/left-arrow.svg" />
                <img className="carousel-image" src={this.props.image} />
                <img className="arrow" src="../public/images/right-arrow.svg" />
                <ShareButton />
                <hr />
            </div>
        );
    }
});

module.exports = Carousel;
