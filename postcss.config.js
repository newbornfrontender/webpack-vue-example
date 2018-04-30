'use strict'

module.exports = ({
  file,
  env,
  options
}) => ({
  parser: (
    (file.extname === '.less') ? 'postcss-less' :
    (file.extname === '.scss') ? 'postcss-scss' :
    (file.extname === '.sass') ? 'postcss-sass' :
    (file.extname === '.sss') ? 'sugarss' :
    false
  ),
  plugins: {
    'postcss-nested': true,
    'postcss-import': {
      root: file.dirname
    },
    'postcss-strip-inline-comments': true,
    'postcss-prettify': (
      (env === 'development') ? true : false
    ),
    'autoprefixer': (
      (env === 'development') ? false : {
        grid: true,
        cascade: false
      }
    ),
    'postcss-csso': (
      (env === 'development') ? false : true
    )
  }
})
