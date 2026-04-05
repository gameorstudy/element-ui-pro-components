const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const config = require('./config');

module.exports = {
  mode: 'development',
  entry: './examples/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: config.alias
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: process.cwd(),
        exclude: config.jsExclude,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false
          },
          hotReload: true
        }
      },
      {
        test: /\.(less|css)$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: path.posix.join('static', '[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new ProgressBarPlugin(),
    new HtmlWebpackPlugin({
      template: './examples/index.html',
      filename: 'index.html',
      favicon: './examples/favicon.ico'
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    compress: true,
    port: 8085,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  devtool: 'eval-cheap-module-source-map',
  performance: {
    hints: false
  },
  stats: {
    assets: false,
    modules: false,
    children: false
  }
};