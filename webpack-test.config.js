// Tribute to https://blog.threatstack.com/unit-testing-with-webpack-mocha

const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const WebpackShellPlugin = require('webpack-shell-plugin');
const path = require('path');

module.exports = {
  entry: './app/js/index.spec.js',
  output: {
    filename: 'test-bundle.js',
    path: path.resolve(__dirname, 'dist_test')
  },
  target: 'node',
  externals: [nodeExternals()],
  node: {
    fs: 'empty'
  },
  module: {
    rules: [{
      enforce: "pre",
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "eslint-loader",
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    }]
  },
  plugins: [
    new WebpackShellPlugin({
      onBuildExit: 'mocha -R nyan -c ' + path.resolve(__dirname, 'dist_test/test-bundle.js')
    })
  ]
};
