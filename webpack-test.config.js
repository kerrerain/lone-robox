// Tribute to https://blog.threatstack.com/unit-testing-with-webpack-mocha

var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');
var WebpackShellPlugin = require('webpack-shell-plugin');

module.exports = {
  entry: './app/js/index.spec.js',
  output: {
    filename: 'test-bundle.js',
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
      onBuildExit: "mocha -R nyan -c test-bundle.js"
    })
  ]
};
