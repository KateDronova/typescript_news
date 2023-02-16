/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
require('source-map-support').install();

const baseConfig = {
    context: __dirname,
    entry: path.resolve(__dirname, './src/index.ts'),
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: './'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                  {
                    loader: MiniCssExtractPlugin.loader,
                  },
                  {
                    loader: 'css-loader',
                  },
                ],
              },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jp(e*)g|gif|svg)$/i,
                type: 'asset/resource',
                generator: {
                  filename: '[name][ext]'
                }
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'bundle.css',
          }),
        new CleanWebpackPlugin()
    ],
};

module.exports = ({ mode }) => {
    const isProductionMode = mode === 'prod';
    const envConfig = isProductionMode ? require('./webpack.prod.config') : require('./webpack.dev.config');

    return merge(baseConfig, envConfig);
};
