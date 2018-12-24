const path = require('path');

module.exports = {
	entry: {
		home: './src/typescript/home/home.ts',
		about: './src/typescript/about/about.ts',
	},
	module: {
		rules: [{
			// Include ts, tsx, js, and jsx files.
			test: /\.(ts|js)x?$/,
			// exclude: /node_modules/,
			loader: 'babel-loader',
		}],
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