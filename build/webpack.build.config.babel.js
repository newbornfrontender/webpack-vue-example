'use strict';

// IMPORTS
// =============================================================================

// Plugins
// -----------------------------------------------------------------------------

import WebpackConfig from 'webpack-config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

// PLUGINS
// =============================================================================

const MCEP = new MiniCssExtractPlugin({
  filename: 'main.min.css',
});

// CONFIG
// =============================================================================

const config = new WebpackConfig().extend(
  './build/webpack.base.config.js', {
  './build/webpack.start.config.babel.js': config => {
    delete config.mode;

    delete config.plugins;

    return config;
  },
}).merge({
  mode: 'production',

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all",
        },
      },
    },
  },

  plugins: [
    MCEP,
  ],
});

// EXPORTS
// =============================================================================

export default config;
