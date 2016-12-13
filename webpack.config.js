'use strict';

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = [{
  entry: {
    app: './src/js/index.jsx'
  },
  output: {
    path: './public/js/',
    filename: 'bundle.js',
    publicPath: '/js/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  devServer: {
    contentBase: 'public',
      //inline: true,
      //https: true
  }
},{
  entry: {
    app: './src/scss/style.scss'
  },
  output: {
    path: './public/css/',
    filename: 'style.css'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!sass-loader')
      }
    ]
  },
  postcss: function () {
      return [autoprefixer];
  },
  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true })
  ]}
]
