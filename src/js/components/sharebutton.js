var React = require("react");
var ReactDOM = require("react-dom");

var methods = require("../methods/methods.js");

console.log("in share", methods);

var ShareButton = React.createClass({

    render: function() {

        return (
            <div className="share-button">
                <div className="share-button-hover">
                    <div className="social-buttons">
                        <div>
                            <p>0</p>
                            <img src="https://g.twimg.com/about/feature-corporate/image/tweetbutton.png" />
                        </div>
                        <div>
                            <p>246</p>
                            <img src="http://4.bp.blogspot.com/-U9NlRJ5La5U/VT1Pm4IyhbI/AAAAAAAABrg/NhlQ0M_OT8I/s1600/share-button.png" />
                        </div>
                        <div>
                            <p>10</p>
                            <img src="http://3.bp.blogspot.com/-vRtr0HwWUxM/VXqTT_uO51I/AAAAAAAAfQU/9KQiFP_5rgw/s1600/Red-signin_Google_base_44dp.png" />
                        </div>
                    </div>
                    <div className="arrow-down"></div>
                </div>
                <button>SHARE</button>
            </div>
        );

    }

});

module.exports = ShareButton;
