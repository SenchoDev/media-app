const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['babel-polyfill', './src/js/index.js', './src/js/carousel.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'searches.html',
            template: './src/searches.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'trending.html',
            template: './src/trending.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'comingSoon.html',
            template: './src/comingSoon.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'login.html',
            template: './src/login.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'signin.html',
            template: './src/signin.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            
        ]
    },
};
