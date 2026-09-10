const path = require('path');
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (_env, argv = {}) => ({
	devtool: argv.mode === 'production' ? false : 'eval-source-map',
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
				use: [
					argv.mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
					'css-loader',
					{
						loader: 'sass-loader',
						options: {
							implementation: require('sass'),
							sassOptions: {
								quietDeps: true,
								silenceDeprecations: ['legacy-js-api', 'import'],
							},
						},
					},
				],
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
        new MiniCssExtractPlugin({ filename: '[name].[contenthash:8].css' }),
        {
            apply(compiler) {
                compiler.hooks.thisCompilation.tap('PublicAssets', (compilation) => {
                    compilation.hooks.processAssets.tap({
                        name: 'PublicAssets',
                        stage: compiler.webpack.Compilation.PROCESS_ASSETS_STAGE_ADDITIONAL,
                    }, () => {
                        const files = {
                            'robots.txt': 'public/robots.txt',
                            'sitemap.xml': 'public/sitemap.xml',
                            'CNAME': 'public/CNAME',
                            'social-preview.jpg': 'src/images/villa-pool-day-wide.jpg',
                        };
                        for (const [output, source] of Object.entries(files)) {
                            const sourcePath = path.resolve(__dirname, source);
                            compilation.fileDependencies.add(sourcePath);
                            compilation.emitAsset(output, new compiler.webpack.sources.RawSource(fs.readFileSync(sourcePath)));
                        }
                    });
                });
            },
        },
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
});
