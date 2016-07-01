var React = require("react");
var ReactDOM = require("react-dom");

var ShareButton = require("./sharebutton.jsx");

var Carousel = React.createClass({
    render: function() {

        return (
            <div className="carousel">
                <img className="arrow left" alt="left arrow" src="../public/images/left-arrow.svg" />
                <img className="carousel-image" src={this.props.image} id={this.props.id} alt={this.props.keyword} />
                <img className="arrow right" alt="right arrow" src="../public/images/right-arrow.svg" />
                <ShareButton />
                <hr />
            </div>
        );
    },

    componentDidMount: function() {
        var properties = this.props;

        addArrowEventListeners(properties);

    }

});

// adds event listeners to carousel arrows
function addArrowEventListeners(properties) {
    var leftArrowNode = document.querySelectorAll(".left");
    var rightArrowNode = document.querySelectorAll(".right");
    var currentImageId;

    // adds event listener to left arrow click
    leftArrowNode[0].addEventListener("click", function() {
        currentImageId = document.getElementsByClassName("carousel-image")[0].id;

        loadPreviousImage(properties, currentImageId);
    });

    // adds event listener to right arrow click
    rightArrowNode[0].addEventListener("click", function() {
        currentImageId = document.getElementsByClassName("carousel-image")[0].id;

        loadNextImage(properties, currentImageId);
    });

    // adds event listener on left arrow mouseover
    leftArrowNode[0].addEventListener("mouseover", function() {
        leftArrowNode[0].src = "../public/images/left-arrow-hover.svg";
    });

    // adds event listener on left arrow mouseleave
    leftArrowNode[0].addEventListener("mouseleave", function() {
        leftArrowNode[0].src = "../public/images/left-arrow.svg";
    });

    // adds event listener on right arrow mouseover
    rightArrowNode[0].addEventListener("mouseover", function() {
        rightArrowNode[0].src = "../public/images/right-arrow-hover.svg";
    });

    // adds event listener on right arrow mouseleave
    rightArrowNode[0].addEventListener("mouseleave", function() {
        rightArrowNode[0].src = "../public/images/right-arrow.svg";
    });
}

// loads previous image in carousel
function loadPreviousImage(properties, currentImageId) {
    var previousImageId = parseInt(currentImageId) - 1;
    var previousImage;

    // if not first image from grid, renders current image - 1
    if (previousImageId !== -1) {
        previousImage = document.getElementById(previousImageId.toString()).src;

        ReactDOM.render(
            <Carousel image={previousImage} id={previousImageId} />,
            document.getElementsByClassName("carousel")[0]
        );

    // if first image from grid, renders image #14
    } else {
        previousImage = document.getElementById("14").src;

        ReactDOM.render(
            <Carousel image={previousImage} id="14" />,
            document.getElementsByClassName("carousel")[0]
        );
    }
}

// loads next image in carousel
function loadNextImage(properties, currentImageId) {
    var nextImageId = parseInt(currentImageId) + 1;
    var nextImage;

    // if not last image from grid, renders current image + 1
    if (nextImageId !== 15) {
        nextImage = document.getElementById(nextImageId.toString()).src;

        ReactDOM.render(
            <Carousel image={nextImage} id={nextImageId} />,
            document.getElementsByClassName("carousel")[0]
        );

    // if last image from grid, renders image #0
    } else {
        nextImage = document.getElementById("0").src;

        ReactDOM.render(
            <Carousel image={nextImage} id="0" />,
            document.getElementsByClassName("carousel")[0]
        );
    }
}

module.exports = Carousel;
