var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path')

module.exports = [
    // 抽取公共代码为vendor.js
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js',
      chunk: 'vendor'
    }),
    // 定义环境变量
    new webpack.DefinePlugin({
      "process.env":{
        NODE_ENV: JSON.stringify(process.env.DEVELOPMENT==1?'development':'production')
      },
      __DEV__: process.env.DEVELOPMENT==1?true:false,
      __RELEASE__: process.env.RELEASE==1?true:false,
      DEV_TOOL: process.env.DEV_TOOL==1?true:false
    }),
    // 定义代码中可直接使用的伪全局变量
    new webpack.ProvidePlugin({
      $:'jquery',
      'jQuery':'jquery',
      'React':'react',
      '_':'underscore',
      'ReactDOM':'react-dom'
    }),
    // 非开发模式进行代码压缩
    new webpack.optimize.UglifyJsPlugin({
      compress:{
        warnings: true
      }
    }),
    // 抽取css代码为单独的文件
    new ExtractTextPlugin('[name].css')
  ];