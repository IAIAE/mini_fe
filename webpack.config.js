var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');

var configLoaders = require('./config-loader.js');
var configPlugins = require('./config-plugin.js');
var configPostcss = require('./config-postcss.js')


module.exports = {
  context: path.join(__dirname, './'),
  entry: {
    itemlist: path.join(__dirname, './itemList.jsx'),
    itemdetail: path.join(__dirname, './itemDetail.jsx'),
    vendor: [
      'redux',
      'react',
      'react-redux',
      'react-dom',
      'underscore',
      'jquery',
      'redux-thunk',
      'redux-promise',
      'immutable',
      'redux-undo',
      'whatwg-fetch'
    ]
  },
  output: {
    path: __dirname + '/build',
    filename: '[name].js',
    chunkFilename:'[name].chunk.js',
    publicPath:'/build/',
    jsonpFunction:'tencent_mini'
  },
  module: {
    loaders: configLoaders
  },
  postcss: configPostcss(webpack),
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules')]
  },
  plugins: configPlugins,
  devServer: {
    historyApiFallback: true,
    inline:true
  }
}