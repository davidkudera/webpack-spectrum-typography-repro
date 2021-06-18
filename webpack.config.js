const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = {
	mode: 'development',
	entry: {
		app: path.resolve(__dirname, 'app.js'),
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		port: 9000,
	},
	resolve: {
		extensions: ['.js'],
	},
	module: {
		rules: [
			{
				test: /\.js$/,
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin(),
	],
};
