var React = require("react");
var ReactDOM = require("react-dom");

var ShareButton = require("./sharebutton.js");

var Carousel = React.createClass({
    render: function() {

        return (
            <div id="carousel">
                <img className="arrow left" src="../public/images/left-arrow.svg" />
                <img className="carousel-image" src={this.props.image} />
                <img className="arrow right" src="../public/images/right-arrow.svg" />
                <ShareButton />
                <hr />
            </div>
        );
    },

    componentDidMount: function() {
        var leftArrowNode = document.getElementById(".left");
        var rightArrowNode = document.getElementById(".right");
        var properties = this.props;

        leftArrowNode.addEventListener("click", function() {
            console.log("left");
        });

        rightArrowNode.addEventListener("click", function() {
            console.log("right");
        });

        ReactDOM.render(
            <Carousel image={clickedImage} />,
            document.getElementById("carousel")
        );

    },

});

module.exports = Carousel;
