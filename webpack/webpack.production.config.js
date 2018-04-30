'use strict'

import WebpackConfig from 'webpack-config'
import Path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
// import ExtractTextWebpackPlugin from 'extract-text-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export default new WebpackConfig().merge({
  mode: 'production',
  output: {
    path: Path.resolve(__dirname, '../production/'), // ?
    filename: 'bundle.min.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.min.html',
      // hash: true,
      minify: {
        html5: true, // ?
        removeEmptyAttributes: true,
        // removeAttributeQuotes: true,
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true
      }
    }),
    // new ExtractTextWebpackPlugin({
    //   filename: 'styles.min.css'
    // }),
    new MiniCssExtractPlugin({
      filename: 'styles.[contenthash].min.css'
    })
  ]
})
