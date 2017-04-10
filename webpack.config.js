const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: './app/js/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules:[
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
			        loader: 'babel-loader',
			        options: {
			          presets: ['env']
			        }
		      	}
			}
		]
	},
	plugins: [
    	new webpack.optimize.UglifyJsPlugin(),
    	new HtmlWebpackPlugin({
    		title: 'Lone Robox',
    		template: './app/index.html'
    	})
  	]
};