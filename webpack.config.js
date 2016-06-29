var webpack = require("webpack");

var config = {
    entry: {
        javascript: __dirname + "/src/js/app.jsx"
    },
    output: {
        path: __dirname + "/public/js/",
        filename: "bundle.js"
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ["react-hot", "babel"]
            }
        ]
    }
}

module.exports = config;
