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
    }
});

module.exports = Nav;
