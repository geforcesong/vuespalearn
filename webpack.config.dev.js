var resolve = require('path').resolve;
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: [
            resolve(__dirname, 'www', 'index.js')
        ]
    },
    output: {
        path: resolve(__dirname, 'public', 'assets'),
        filename: '[name].[hash].bundle.js'
    },
    debug: true,
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                loader: 'babel?{"presets":["es2015"]}',
                exclude: /node_modules/
            }
        ]
    },
    vue: {
        loaders: {
            js: 'babel?{"presets":["es2015"]}',
            css: 'vue-style!css!postcss!less'
        }
    },
    postcss: function() {
        return [];
    },
    resolve: {
        root: [
            resolve(__dirname),
            resolve(__dirname, 'www')
        ],
        extensions: [
            '',
            '.js',
            '.vue'
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: 'body',
            template: 'www/index.html_vm',
            hash: false
        })
    ]
};
