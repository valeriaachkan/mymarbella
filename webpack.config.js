const path = require('path');
const webpack = require('webpack');

module.exports = [
  {
    // Server-side configuration
    entry: './src/server.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'server.bundle.js'
    },
    target: 'node',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    },
    optimization: {
      minimize: false
    }
  },
  {
    // Client-side configuration
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    target: 'web',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
		{
			test: /\.(scss|css|sass)$/,
			use: ['style-loader', 'css-loader', 'sass-loader'],
		},
		{
			test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
			type: 'asset/resource',
		},
		{
			test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
			type: 'asset/inline',
		},
      ]
    },
    optimization: {
      minimize: true
    }
  }
];
