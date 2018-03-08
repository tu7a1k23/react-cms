const path = require('path');
const webpack = require('webpack');

var APP_DIR = path.resolve(__dirname, 'src');
var BUILD_DIR = path.resolve(__dirname, 'dist/js');

module.exports = {
  entry: {
    vendor: ['babel-polyfill', 'jquery', 'popper.js', 'bootstrap' ,'react', 'react-dom'],
    app: `${APP_DIR}/app.jsx`,
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].min.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
    })
  ]
}