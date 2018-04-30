'use strict'

import WebpackConfig from 'webpack-config'
// import ExtractTextWebpackPlugin from 'extract-text-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default new WebpackConfig().extend(
  // './webpack/webpack.[NODE_ENV].config.js'
  `./webpack/webpack.${process.env.NODE_ENV}.config.js`
).merge({
  entry: {
    main: './source/index.js'
  },
  module: {
    rules: [
      {
        test: /\.(html|(p|post)html|pug|sml)$/,
        exclude: /node_modules/,
        use: [
          'html-loader',
          'posthtml-loader'
        ]
      },
      // {
      //   test: /\.(css|(p|post)css|less|s?[a|c]ss|sss)$/,
      //   exclude: /node_modules/,
      //   use: ExtractTextWebpackPlugin.extract({
      //     fallback: 'style-loader', // ?
      //     use: [
      //       {
      //         loader: 'css-loader',
      //         options: {
      //           importLoaders: 1,
      //           sourceMap: true
      //         }
      //       },
      //       {
      //         loader: 'postcss-loader',
      //         options: {
      //           // config: {
      //           //   path: './postcss.config.babel.js',
      //           // },
      //           sourceMap: true
      //         }
      //       }
      //     ]
      //   })
      // },
      {
        test: /\.(css|(p|post)css|less|s?[a|c]ss|sss)$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              // config: {
              //   path: './postcss.config.babel.js',
              // },
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },
  // externals: {},
  plugins: [
    new HtmlWebpackPlugin({
      template: './source/pages/index.phtml',
      title: 'Test site',
      inject: false
    })
  ]
})
