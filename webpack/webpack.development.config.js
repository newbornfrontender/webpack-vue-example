'use strict'

import WebpackConfig from 'webpack-config'
import Path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
// import ExtractTextWebpackPlugin from 'extract-text-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export default new WebpackConfig().merge({
  mode: 'development',
  output: {
    path: Path.resolve(__dirname, '../development/'), // ?
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      hash: false
    }),
    // new ExtractTextWebpackPlugin({
    //   filename: 'styles.css'
    // }),
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    })
  ]
})
