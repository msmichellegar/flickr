var React = require("react");
var ReactDOM = require("react-dom");

var methods = require("./methods/methods.js");

var Carousel = require("./components/carousel.js");
var Grid = require("./components/grid.js");
var Nav = require("./components/nav.js");

console.log("in app", methods);

var App = React.createClass({

    render: function() {
        return (
            <div>
                <Carousel image="http://www.sobserver.ws/themes/publication_10/theme_1/assets/img/loading.gif" />
                <section id="images"></section>
                <Nav />
            </div>
        );

    }

});

ReactDOM.render(
  <App />,
  document.getElementById("app")
);

methods.getPhotos("1", "puppy");
