var webpack = require('webpack');

var config = {
    entry: {
        javascript: __dirname + "/src/js/app.js"
    },
    output: {
        path: __dirname + "/public/js/",
        filename: "bundle.js"
        // publicPath : "./public/"
    },
    devServer: {
        // contentBase: __dirname + "/public/",
        hot: true
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel']
            }
        ]
    }
}

module.exports = config;
