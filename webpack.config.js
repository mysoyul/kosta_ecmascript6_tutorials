const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

let htmlPageNames = ['ratefinder'];
let multipleHtmlPlugins = htmlPageNames.map(name => {
  return new HtmlWebpackPlugin({
    template: `./${name}.html`, // relative path to the HTML files
    filename: `${name}.html`, // output HTML files
    chunks: [`${name}`] // respective JS files
  })
});

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
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ]
  },//module
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      chunks: ['app']
    })
  ].concat(multipleHtmlPlugins), //plugins
  devServer: {
    port: 8087,
    open: true
  },
  stats: {
    colors: true
  },
  devtool: 'source-map',
  mode: 'development'
};