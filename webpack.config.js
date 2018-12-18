const path = require('path');

module.exports = {
	entry: {
		home: './src/typescript/home/home.ts',
		about: './src/typescript/about/about.ts',
	},
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
			}
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	},
	optimization: {
		splitChunks: {
			chunks: 'all'
		}
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
};