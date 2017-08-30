var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  entry: {
    main: './src/js/index.js',
    vendor: ['lodash', 'moment']
  },
  output: {
    filename: '[name].[chunkHash:8].js',
    path: './dist/js'
  },
  module: {
    rules: [{
      test: /\.css$/,
      exclude: /node_modules/,
      loader: ExtractTextPlugin.extract('css-loader?sourceMap')
    }]
  },
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new ExtractTextPlugin({
      filename: '[name].[chunkHash:8].css',
      disable: false,
      allchunks: true
    })
  ]
}
