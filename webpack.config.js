const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    entry: '.index.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader', 'sass-loader', "postcss-loader"
                    ]
                })
            }

        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css')
    ],
};
