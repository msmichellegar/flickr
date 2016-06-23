var React = require("react");
var ReactDOM = require("react-dom");

var ShareButton = require("./sharebutton.jsx");

var Carousel = React.createClass({
    render: function() {

        return (
            <div className="carousel">
                <img className="arrow left" src="../public/images/left-arrow.svg" />
                <img className="carousel-image" src={this.props.image} id={this.props.id} />
                <img className="arrow right" src="../public/images/right-arrow.svg" />
                <ShareButton />
                <hr />
            </div>
        );
    },

    componentDidMount: function() {
        var leftArrowNode = document.querySelectorAll(".left");
        var rightArrowNode = document.querySelectorAll(".right");
        var properties = this.props;
        var currentImageId;

        leftArrowNode[0].addEventListener("click", function() {
            currentImageId = document.getElementsByClassName("carousel-image")[0].id;

            activateLeftArrow(properties, currentImageId);
        });

        rightArrowNode[0].addEventListener("click", function() {
            currentImageId = document.getElementsByClassName("carousel-image")[0].id;

            activateRightArrow(properties, currentImageId);
        });

    }

});

function activateLeftArrow(properties, currentImageId) {
    var previousImageId = parseInt(currentImageId) - 1;
    var previousImage;

    if (previousImageId !== -1) {
        previousImage = document.getElementById(previousImageId.toString()).src;

        ReactDOM.render(
            <Carousel image={previousImage} id={previousImageId} />,
            document.getElementsByClassName("carousel")[0]
        );

    } else {
        previousImage = document.getElementById("14").src;

        ReactDOM.render(
            <Carousel image={previousImage} id="14" />,
            document.getElementsByClassName("carousel")[0]
        );
    }
}

function activateRightArrow(properties, currentImageId) {
    var nextImageId = parseInt(currentImageId) + 1;
    var nextImage;

    if (nextImageId !== 15) {
        nextImage = document.getElementById(nextImageId.toString()).src;

        ReactDOM.render(
            <Carousel image={nextImage} id={nextImageId} />,
            document.getElementsByClassName("carousel")[0]
        );

    } else {
        nextImage = document.getElementById("0").src;

        ReactDOM.render(
            <Carousel image={nextImage} id="0" />,
            document.getElementsByClassName("carousel")[0]
        );
    }
}

module.exports = Carousel;
