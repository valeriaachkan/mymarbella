const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devtool: 'eval-source-map',
	entry: {
		index: './src/index.js',
		// contacts: './src/contacts.js',
		propertyList: './src/propertyList.js',
		propertyDetails: './src/propertyDetails.js',
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	optimization: {
		splitChunks: {
			chunks: 'all',
		},
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				use: ['html-loader'],
			},
			{
				test: /\.(scss|css|sass)$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
				type: 'asset/resource',
			},
			{ test: /\.hbs$/, loader: 'handlebars-loader' },
			{
				test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
				type: 'asset/inline',
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/index.html',
			minify: {
				collapseWhitespace: true,
				removeComments: true,
				removeRedundantAttributes: true,
				removeScriptTypeAttributes: true,
				useShortDoctype: true,
			},
			chunks: ['index'],
		}),
		new HtmlWebpackPlugin({
			filename: 'propertyList.html',
			template: './src/propertyList.html',
			minify: {
				collapseWhitespace: true,
				removeComments: true,
				removeRedundantAttributes: true,
				removeScriptTypeAttributes: true,
				useShortDoctype: true,
			},
			chunks: ['propertyList'],
		}),
		new HtmlWebpackPlugin({
			filename: 'propertyDetails.html',
			template: './src/propertyDetails.html',
			minify: {
				collapseWhitespace: true,
				removeComments: true,
				removeRedundantAttributes: true,
				removeScriptTypeAttributes: true,
				useShortDoctype: true,
			},
			chunks: ['propertyDetails'],
		}),
	],
	devServer: {
		static: {
			directory: path.join(__dirname, 'src'),
		},
		compress: true,
		port: 8000,
		host: '0.0.0.0',
	},
};
