var React = require("react");
var ReactDOM = require("react-dom");

var Carousel = require("../components/carousel.jsx");
var Grid = require("../components/grid.jsx");

var Pagination = React.createClass({
    render: function() {

        return (
            <p className="pagination">
                <a>&#60;&#60;</a><a>&#60;</a><a>1</a><a>2</a><a>3</a><a>4</a><a>5</a><a>6</a><a>&#62;</a><a>&#62;&#62;</a>
            </p>
        );

    },

    componentDidMount: function() {
        var keyword = this.props.searchTerm;
        var currentPageNumber;

        addPaginationEventListeners(keyword, this.props.methods);

    }
});

// adds event listeners for navigating pages with button
function addPaginationEventListeners(keyword, methods) {
    var pageNodes = document.querySelectorAll(".pagination a");

    // adds event listener to each button
    pageNodes.forEach(function(node) {

        // on click
        node.addEventListener("click", function() {
            var currentPageId = document.querySelectorAll(".grid")[0].id;
            var currentPageNumber = parseInt(currentPageId.split("-")[1]);
            var keyword = document.querySelectorAll(".carousel-image")[0].alt;

            // << loads first page
            if (node.innerText === "<<") {
                methods.getPhotos("1", keyword);

            // < loads previous page
            } else if (node.innerText === "<") {
                var previousPage;

                if (currentPageNumber - 1 > 0) {
                    previousPage = (currentPageNumber -1).toString();

                    methods.getPhotos(previousPage, keyword);
                }

            // > loads next page
            } else if (node.innerText === ">") {
                var nextPage;

                if (currentPageNumber + 1 !== 6) {
                    nextPage = parseInt(currentPageNumber +1);

                    methods.getPhotos(nextPage.toString(), keyword);
                }

            // >> loads last page
            } else if (node.innerText === ">>") {
                methods.getPhotos("6", keyword);

            // number loads specific page
            } else {
                methods.getPhotos(node.innerText, keyword);

            }

        });

    });
}

module.exports = Pagination;
