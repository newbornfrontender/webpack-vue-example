'use strict';

// IMPORTS
// =============================================================================

// Modules
// -----------------------------------------------------------------------------

import webpack from 'webpack';

// Plugins
// -----------------------------------------------------------------------------

import WebpackConfig from 'webpack-config';

// SETTINGS
// =============================================================================

// Webpack development server
// -----------------------------------------------------------------------------

const HOST = 'localhost';
const PORT = 8080;

// PLUGINS
// =============================================================================

const HMRP = new webpack.HotModuleReplacementPlugin();

// RULES
// =============================================================================

const LOADER = {
  CSS: {
    test: /\.css$/,
    use: [
      'vue-style-loader',
      'css-loader',
    ],
  },

  STYLUS: {
    test: /\.styl(us)?$/,
    use: [
      'vue-style-loader',
      'css-loader',
      'stylus-loader',
    ],
  },
};

// CONFIG
// =============================================================================

const config = new WebpackConfig().extend(
  './build/webpack.base.config.js', {
  './build/webpack.start.config.babel.js': config => {
    delete config.module.rules;

    delete config.plugins;

    return config;
  },
}).merge({
  devServer: {
    clientLogLevel: 'warning',
    hot: true,
    contentBase: 'dist',
    compress: true,
    host: HOST,
    port: PORT,
    open: true,
    overlay: {
      warnings: false,
      errors: true,
    },
    publicPath: '/',
    quiet: true,
    watchOptions: {
      poll: true,
    },
  },

  module: {
    rules: [
      LOADER.CSS,
      LOADER.STYLUS,
    ],
  },

  plugins: [
    HMRP,
  ],
});

// EXPORTS
// =============================================================================

export default config;
