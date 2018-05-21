// define envvars 
var DEV_ENV = 'WIN'; // LNX

// define vars
var home_path = (function() {
	if (DEV_ENV == 'LNX') {
		return 'F:/Projects/rutametromx/';
	}
	if (DEV_ENV == 'WIN') {
		return 'F:\\Projects\\rutametromx\\';
	}
})();

var src_path = (function() {
	if (DEV_ENV == 'LNX') {
		return 'src/';
	}
	if (DEV_ENV == 'WIN') {
		return 'src\\';
	}
})();

var dist_path = (function() {
	if (DEV_ENV == 'LNX') {
		return 'dist/';
	}
	if (DEV_ENV == 'WIN') {
		return 'dist\\';
	}
})();

var js_path = (function() {
	if (DEV_ENV == 'LNX') {
		return 'jscript/';
	}
	if (DEV_ENV == 'WIN') {
		return 'jscript\\';
	}
})();

var server_dir = (function() {
	if (DEV_ENV == 'LNX') {
		return '';
	}
	if (DEV_ENV == 'WIN') {
		return 'C:\\Users\\SaulIvan\\Desktop\\';
	}
})();

var views_path = (function() {
	if (DEV_ENV == 'LNX') {
		return 'views/';
	}
	if (DEV_ENV == 'WIN') {
		return 'views\\';
	}
})();

var src_js_home_bundle = [ 
						home_path + src_path + js_path + 'home.js',
						home_path + src_path + js_path + 'another.js',
					];

var dist_js_home_bundle = 'home_bundle.js';

// define tasks

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'production',
	entry: {
			home: src_js_home_bundle,
	},
	output: {
		filename: dist_js_home_bundle,
		path: home_path + dist_path + js_path,
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				use: [{ loader: "html-loader", options: { minimize: true } }]
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
						options: {
							minimize: true,
						}
					},
				]
			},
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: home_path + src_path + views_path + 'index.html',
			chunks: ['home'],
			filename: home_path + dist_path + views_path + 'index.html'
		}),
		new CopyWebpackPlugin([
			{
				from: home_path + src_path + 'server.js',
				to: home_path + dist_path
			},
			{
				from: home_path + 'package*.json',
				to: home_path + dist_path
			},
			{
				from: home_path + src_path + 'Dockerfile',
				to: home_path + dist_path
			},
			{
				from: home_path + src_path + '.dockerignore',
				to: home_path + dist_path
			},
			// {
			// 	from: home_path + dist_path + '**/*',
			// 	to: server_dir
			// },
		],{debug: 'warning'})
	]
};