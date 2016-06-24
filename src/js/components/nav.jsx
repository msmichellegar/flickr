var React = require("react");
var ReactDOM = require("react-dom");

var Nav = React.createClass({

    render: function() {

        return (
            <nav>
                <h1>Photos</h1>
                <input type="text" placeholder="Search" id="search" />
                <img src="../public/images/search-icon.svg" />
            </nav>
        );

    },

    componentDidMount() {

        addSearchEventListener(this.props.methods);
    }

});

function addSearchEventListener(methods) {
    var searchNode = document.getElementById("search");

    searchNode.addEventListener("keydown", function(event){

        if (event.keyCode === 13) {
            var searchTerm = searchNode.value;

            methods.getPhotos("1", searchTerm);

        }

    });
}

module.exports = Nav;