'use strict'

module.exports = ({
  file,
  env,
  options
}) => ({
  parser: (
    (file.extname === '.pug') ? 'posthtml-pug' :
    (file.extname === '.sml') ? 'posthtml-sugarml' :
    false
  ),
  plugins: {
    'posthtml-doctype': {
      doctype: 'HTML 5'
    },
    'posthtml-include': {
      root: file.dirname
    },
    'posthtml-bem': {
      elemPrefix: '__',
      modPrefix: '--',
      modDlmtr: '--'
    },
    'posthtml-attrs-sorter': {
      'order': [
        'class', 'id', 'name',
        'data-.+', 'ng-.+', 'src',
        'for', 'type', 'href',
        'values', 'title', 'alt',
        'role', 'aria-.+',
        '$unknown$'
      ]
    },
    'posthtml-beautify': {
      rules: {
        indent: 2,
      },
      // mini: {
      //   removeAttribute: (
      //     (env === 'development') ? false : true
      //   )
      // }
    }
  }
})
