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

function addPaginationEventListeners(keyword, methods) {
    var pageNodes = document.querySelectorAll(".pagination a");

    pageNodes.forEach(function(node) {

        node.addEventListener("click", function() {
            var currentPageId = document.querySelectorAll(".grid")[0].id;
            var currentPageNumber = parseInt(currentPageId.split("-")[1]);

            // loads first page
            if (node.innerText === "<<") {

                methods.getPhotos("1", keyword);

            // loads previous page
            } else if (node.innerText === "<") {
                var previousPage;

                if (currentPageNumber - 1 > 0) {
                    previousPage = (currentPageNumber -1).toString();

                    methods.getPhotos(previousPage, keyword);
                }

            // loads next page
            } else if (node.innerText === ">") {
                var nextPage;

                if (currentPageNumber + 1 !== 6) {
                    nextPage = parseInt(currentPageNumber +1);

                    console.log(nextPage)

                    methods.getPhotos(nextPage.toString(), keyword);
                }

            // loads last page
            } else if (node.innerText === ">>") {

                methods.getPhotos("6", keyword);

            // loads specific page number
            } else {

                methods.getPhotos(node.innerText, keyword);

            }

        });

    });
}

module.exports = Pagination;