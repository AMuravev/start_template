const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = [

  new HtmlWebpackPlugin({
    template: './index.html',
    filename: 'index.html',
  }),
  new HtmlWebpackPlugin({
    template: './page2.html',
    filename: 'page2.html',
  }),
  new HtmlWebpackPlugin({
    template: './posts/index.html',
    filename: './posts/index.html',
  }),
  new HtmlWebpackPlugin({
    template: './posts/show.html',
    filename: './posts/show.html',
  }),
]