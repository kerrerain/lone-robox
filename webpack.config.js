const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const pixiPath = path.resolve(__dirname, 'node_modules/pixi.js');

module.exports = {
  entry: './app/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      enforce: "pre",
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "eslint-loader",
    }, {
      test: /\.json$/,
      include: pixiPath,
      loader: 'json-loader'
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      },
    }]
  },
  plugins: [
    //new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      title: 'Lone Robox',
      template: './app/index.html'
    }),
    new CopyWebpackPlugin([{
      from: 'app/assets',
      to: 'assets'
    }])
  ]
};
