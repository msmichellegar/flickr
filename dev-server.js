var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var config = require("./webpack.config.js");

var compiler = webpack(config);

var options = {
    contentBase: "public/",
    hot: true,
    filename: "bundle.js",
    stats: {
        colors: true
    },
    proxy: {
        "*": "http://localhost:8080"
    }
};

var server = new WebpackDevServer(compiler, options);

server.listen(9090, "localhost", function() {
    console.log("webpack-dev-server running");
});
