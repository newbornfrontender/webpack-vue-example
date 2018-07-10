'use strict';

const development = env === 'development';
const production = env === 'production';

module.exports = ({
  env, file, options,
}) => ({
  parser:
    file.extname === '.pug' ? 'posthtml-pug' :
    file.extname === '.sml' ? 'posthtml-sugarml' :
    false,

  plugins: {
    'posthtml-doctype': {
      doctype: 'HTML 5',
    },

    'posthtml-include': {
      root: file.dirname,
    },

    'posthtml-bem': {
      elemPrefix: '__',
      modPrefix: '--',
      modDlmtr: '--',
    },

    'posthtml-attrs-sorter': {
      order: [
        'class', 'id', 'name',
        'data-.+', 'ng-.+', 'src',
        'for', 'type', 'href',
        'values', 'title', 'alt',
        'role', 'aria-.+',
        '$unknown$',
      ],
    },

    'posthtml-beautify': production ? false : {
      rules: {
        indent: 2,
      },
    },
  },
});
