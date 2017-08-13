const webpack = require('webpack');
const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: {
    bundle: './src/js/bundle.js',
    vendor: './src/js/vendor.js'
  },
  output: {
    path: __dirname + "/dist/js",
    filename: "[name].js",
    library: "[name]"
  },
  devtool: "sourcemap",
  plugins: [
    new webpack.ProvidePlugin({}),
    new webpack.NoEmitOnErrorsPlugin(),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 8080,
      files: ['./dist/css/*.css', './dist/*.html'],
      server: { baseDir: ['dist'] }
    }),
    new webpack.optimize.UglifyJsPlugin({
     mangle: {
       except: ['$', 'exports', 'require']
     }
    })
  ],
  resolve: {
    extensions: ['.js'],
    alias: {}
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: [/node_modules/, /dist/]
      },
      {
        test: /\.jsx$/,
        loader: "react-hot-loader!babel-loader",
        exclude: [/node_modules/, /dist/]
      },
      {
        test: /\.(scss|sass)$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  }
};