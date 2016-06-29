var React = require("react");
var ReactDOM = require("react-dom");

var Nav = React.createClass({

    render: function() {

        return (
            <nav>
                <h1>Photos</h1>
                <label for="search">Search:</label>
                <input type="text" placeholder="Search" id="search" name="search" />
                <img src="../public/images/search-icon.svg" alt="search icon" />
            </nav>
        );

    },

    componentDidMount() {

        addSearchEventListener(this.props.methods);
    }

});

// adds event listeners for input into search box
function addSearchEventListener(methods) {
    var searchNode = document.getElementById("search");

    // on keydown
    searchNode.addEventListener("keydown", function(event){

        // if enter button is pressed
        if (event.keyCode === 13) {
            var searchTerm = searchNode.value;

            // gets photos from Flickr and triggers rerender of carousel/grid
            methods.getPhotos("1", searchTerm);

        }

    });
}

module.exports = Nav;
