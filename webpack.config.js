/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-02-06 20:30:45
        Filename: webpack.config.js
        Description: Created by SpringHack using vim automatically.
**/
let webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var path = require('path');

module.exports = {
  entry: {
    vendor: ['react', 'react-dom', 'react-router'],
    main: path.resolve(__dirname, 'src/client/main.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'res/js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        use: [
          'react-hot-loader',
          'babel-loader'
        ],
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', {
          loader: 'less-loader',
          options: {
            sourceMap: true,
            relativeUrls: false
          }
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/client/index.html'),
      inject: true,
      minify: {
        removeComments: true,
	    collapseWhitespace: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_SSR: false
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'res/js/vendor.js'
    }),
    new OpenBrowserPlugin({url: 'http://localhost:9090'}),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  devtool : 'eval-source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    contentBase: path.resolve(__dirname, 'dist'),
    port: 9090
  }
};
