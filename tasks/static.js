module.exports = function() {

  var gulp = require('gulp')

  return gulp.src( [
      'src/**/*',
      '!src/icons/',
      '!src/icons/**/*',
      '!src/images/',
      '!src/images/**/*',
      '!src/scripts/',
      '!src/scripts/**/*',
      '!src/styles/',
      '!src/styles/**/*',
    ] )
    .pipe( gulp.dest( 'dist/' ) )

}
