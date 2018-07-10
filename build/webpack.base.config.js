'use strict';

// IMPORTS
// =============================================================================

// Modules
// -----------------------------------------------------------------------------

import utils from './utils';

// Plugins
// -----------------------------------------------------------------------------

import WebpackConfig from 'webpack-config';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

import { VueLoaderPlugin } from 'vue-loader';

// RULES
// =============================================================================

const LOADER = {
  ESLINT: {
    test: /\.(js|vue)$/,
    use: 'eslint-loader',
    enforce: 'pre',
  },

  VUE: {
    test: /\.vue$/,
    use: 'vue-loader',
  },

  BABEL: {
    test: /\.js$/,
    use: {
      loader: 'babel-loader',
      options: {
        compact: 'false',
      },
    },
  },

  URL: {
    IMG: {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]'), // "./"
        },
      },
    },

    MEDIA: {
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]'),
        },
      },
    },

    FONTS: {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]'),
        },
      },
    },
  },
};

// PLUGINS
// =============================================================================

const HWP = new HtmlWebpackPlugin({
  filename: 'index.html', // "./"
  template: 'index.html',
  inject: true,
});

const VLP = new VueLoaderPlugin();

const CWP = new CopyWebpackPlugin([{
  from: utils.resolve('static/img'), // "./"
  to: utils.resolve('dist/static/img'),
  toType: 'dir',
}]);

// CONFIG
// =============================================================================

const config = new WebpackConfig().merge({
  resolve: {
    extensions: [
      '.js', '.vue', '.json',
    ],
    alias: {
      'assets': utils.resolve('assets'),
      'pages': utils.resolve('src/pages'),
      'static': utils.resolve('static'),
      'components': utils.resolve('src/components'),
    },
  },

  module: {
    rules: [
      LOADER.ESLINT,
      LOADER.VUE,
      LOADER.BABEL,

      LOADER.URL.IMG,
      LOADER.URL.MEDIA,
      LOADER.URL.FONTS,
    ],
  },

  plugins: [
    HWP,
    VLP,
    CWP,
  ],
});

// EXPORTS
// =============================================================================

export default config;
