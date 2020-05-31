const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.join(__dirname, 'public')
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 2424
    },

    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({template: './src/assets/index.html'})
    ],

    module: {
        rules: [
            //css loader
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development' ? true : false,
                            reloadAll: true
                        }
                    },
                    'css-loader'
                ]
            },
            
            //file loader
            {
                test: /\.(svg|wav)$/i,
                loader: 'file-loader'
            }
        ]
    }
};