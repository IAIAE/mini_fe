var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path')

module.exports = [{
      test: /\.html$/,
      loader: 'file?name=[name].[ext]'
    }, {
      // 组件中的css和scss使用css module
      test: /\.css$/,
      include: [
        path.resolve(__dirname,'src/')
      ],
      loader: ExtractTextPlugin.extract(
        'style',
        'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[local]___[hash:base64:5]!postcss-loader'
      )
    }, {
      test: /\.scss$/,
      include: [
        path.resolve(__dirname,'src/')
      ],
      loader: ExtractTextPlugin.extract(
        'style',
        'css-loader?modules&sourceMap&importLoaders=1&localIdentName='+(process.env.NODE_ENV==='production'?'[hash:base64:5]':'[name]__[local]__[hash:base64:5]')+'!postcss-loader!sass-loader'
      )
    }, {
      // assets中的css和scss不使用css module
      test: /\.css$/,
      include: [
        path.resolve(__dirname, 'assets/css/')
      ],
      loader: ExtractTextPlugin.extract('style','css!postcss')
    }, {
      test: /\.scss$/,
      include: [
        path.resolve(__dirname,'assets/css/')
      ],
      loader: ExtractTextPlugin.extract('style', 'css!postcss!sass')
    }, {
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel', // 'babel-loader' is also a valid name to reference
      query: {
        presets: ['es2015', 'react', 'stage-0']
      }
    }, {
      test: /\.(png|jpg|gif)$/,
      loader: 'url-loader?limit=65000'
}];

