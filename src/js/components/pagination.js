var React = require("react");
var ReactDOM = require("react-dom");

var methods = require("../methods/methods.js");

console.log("in pagination", methods)

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

        addPaginationEventListeners(keyword);

    },

    componentWillReceiveProps: function(newProps) {

    }
});

function addPaginationEventListeners(keyword) {
    var pageNodes = document.querySelectorAll(".pagination a");

    pageNodes.forEach(function(node) {

        node.addEventListener("click", function() {

            // loads first page
            if (node.innerText === "<<") {

                methods.getPhotos("1", keyword);

            // loads previous page
            } else if (node.innerText === "<") {
                console.log("previous");

                methods.getPhotos("1", keyword);

            // loads next page
            } else if (node.innerText === ">") {
                console.log("next");

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
