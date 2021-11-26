const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  /*
    entry: './js/main.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'main.bundle.js'
    },
  */
  entry: {
    app: './js/main.js',
    ratefinder: './js/ratefinder.js'
  },//entry
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js'
  },//output
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
  },//module
  plugins: [new CleanWebpackPlugin()], //plugins
  stats: {
    colors: true
  },
  devtool: 'source-map',
  mode: 'development'
};