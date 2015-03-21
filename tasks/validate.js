module.exports = function() {

  var gulp   = require('gulp')
  var eslint = require('gulp-eslint')

  return gulp.src( 'src/**/*.js ')
    .pipe( eslint() )
    .pipe( eslint.format() )
    .pipe( eslint.failOnError() )

}

