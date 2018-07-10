'use strict';

const development = env === 'development';
const production = env === 'production';

module.exports = ({
  env, file, options,
}) => ({
  parser:
    file.extname === '.less' ? 'postcss-less' :
    file.extname === '.scss' ? 'postcss-scss' :
    file.extname === '.sass' ? 'postcss-sass' :
    file.extname === '.sss' ? 'sugarss' :
    false,

  plugins: {
    'postcss-nested': true,

    'postcss-import': {
      root: file.dirname,
    },

    'postcss-strip-inline-comments': development ? true : false,

    'postcss-prettify': development ? true : false,

    'autoprefixer': development ? false : {
      cascade: false,
      grid: true,
    },
  },
});
