const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const { GenerateSW } = require('workbox-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.join(__dirname, 'public')
    },

    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: './src/assets/index.html',
            favicon: './src/assets/favicon.ico'
        }),

        //generate a service worker
        new GenerateSW({
            maximumFileSizeToCacheInBytes: 3000000,
            clientsClaim: true,
            skipWaiting: true
        }),

        //generate a manifest.json file
        new WebpackPwaManifest({
            name: "Tetris",
            short_name: "Tetris",
            start_url: "/index.html",
            display: "fullscreen",
            background_color: "#1A2433",
            theme_color: "#1A2433",
            orientation: "portrait-primary",
            ios: true,
            icons: [
                {
                    src: path.resolve('src/assets/icons/icon72x72.png'),
                    sizes: "72x72",
                    destination: 'assets/icons',
                    purpose: "any maskable"
                },
                {
                    src: path.resolve('src/assets/icons/icon96x96.png'),
                    sizes: "96x96",
                    destination: 'assets/icons',
                    purpose: "any maskable"
                },
                {
                    src: path.resolve('src/assets/icons/icon128x128.png'),
                    sizes: "128x128",
                    destination: 'assets/icons',
                    purpose: "any maskable"
                },
                {
                    src: path.resolve('src/assets/icons/icon144x144.png'),
                    sizes: "144x144",
                    destination: 'assets/icons',
                    purpose: "any maskable"
                },
                {
                    src: path.resolve('src/assets/icons/icon180x180.png'),
                    sizes: "180x180",
                    destination: 'assets/icons',
                    ios: true
                },
                {
                    src: path.resolve('src/assets/icons/icon152x152.png'),
                    sizes: "152x152",
                    destination: 'assets/icons',
                    purpose: "any maskable"
                },
                {
                    src: path.resolve('src/assets/icons/icon192x192.png'),
                    sizes: "192x192",
                    destination: 'assets/icons',
                    purpose: "any maskable"
                },
                {
                    src: path.resolve('src/assets/icons/icon384x384.png'),
                    sizes: "384x384",
                    destination: 'assets/icons',
                    purpose: "any maskable"
                },
                {
                    src: path.resolve('src/assets/icons/icon512x512.png'),
                    sizes: "512x512",
                    destination: 'assets/icons',
                    purpose: "any maskable"
                }
            ]
        })
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
                            hmr: process.env.NODE_ENV === 'development',
                            reloadAll: true
                        }
                    },
                    'css-loader'
                ]
            },
            
            //file loader
            {
                test: /\.(svg|wav)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: (url, resourcePath) => {
                        if (path.extname(resourcePath) === '.svg') {
                            return `./assets/images/${url}`;
                        }

                        if (path.extname(resourcePath) === '.wav') {
                            return `./assets/sound/${url}`;
                        }
                    }
                }
            }
        ]
    }
};