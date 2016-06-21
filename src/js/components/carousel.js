var React = require("react");
var ReactDOM = require("react-dom");

var methods = require("../methods/methods.js");

var ShareButton = require("./sharebutton.js");

console.log("in carousel", methods)


var Carousel = React.createClass({
    render: function() {

        return (
            <div id="carousel">
                <img className="arrow left" src="../public/images/left-arrow.svg" />
                <img className="carousel-image" src={this.props.image} id={this.props.id} />
                <img className="arrow right" src="../public/images/right-arrow.svg" />
                <ShareButton />
                <hr />
            </div>
        );
    },

    // componentDidMount: function() {
    //     var leftArrowNode = document.querySelectorAll(".left");
    //     var rightArrowNode = document.querySelectorAll(".right");
    //     var properties = this.props;
    //
    //     var currentImageId = parseInt(document.getElementsByClassName("carousel-image")[0].id);
    //
    //     leftArrowNode[0].addEventListener("click", function() {
    //         activateLeftArrow(properties, currentImageId);
    //     });
    //
    //     rightArrowNode[0].addEventListener("click", function() {
    //         activateRightArrow(properties, currentImageId);
    //     });
    //
    // },
    //
    // componentWillReceiveProps: function(newProps) {
    //     var leftArrowNode = document.querySelectorAll(".left");
    //     var rightArrowNode = document.querySelectorAll(".right");
    //     var properties = newProps;
    //
    //     var currentImageId = parseInt(document.getElementsByClassName("carousel-image")[0].id);
    //
    //     leftArrowNode[0].removeEventListener("click", activateLeftArrow);
    //
    //     leftArrowNode[0].addEventListener("click", function() {
    //         activateLeftArrow(properties, currentImageId);
    //     });
    //
    //     rightArrowNode[0].removeEventListener("click", activateRightArrow);
    //
    //     rightArrowNode[0].addEventListener("click", function() {
    //         activateRightArrow(properties, currentImageId);
    //     });
    //
    // }

});

function activateLeftArrow(properties, currentImageId) {
    var previousImageId;
    var previousImage;

    if (currentImageId === 0) {
        previousImageId = "15";

    } else {
        previousImageId = parseInt(currentImageId -1);

    }

    console.log(currentImageId, previousImageId);

    previousImage = document.getElementById(previousImageId).src;

    ReactDOM.render(
        <Carousel image={previousImage} id={previousImageId} />,
        document.getElementById("carousel")
    );
}

function activateRightArrow(properties, currentImageId) {
    var nextImageId;
    var nextImage;

    console.log(currentImageId)

    if (currentImageId === 15) {
        nextImageId = "0";

    } else {

    }
}

module.exports = Carousel;
