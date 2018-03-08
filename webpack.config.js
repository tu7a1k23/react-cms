const path = require('path');
const webpack = require('webpack');

var APP_DIR = path.resolve(__dirname, 'src');
var BUILD_DIR = path.resolve(__dirname, 'dist/js');

module.exports = {
  entry: `${APP_DIR}/index.jsx`,
  output: {
    path: BUILD_DIR,
    filename: 'app.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader',
        exclude: /node_modules/
      },
      {
          test: /\.s[a|c]ss$/,
          loader: 'style!css!sass'
      }
    ]
  }
}