module.exports = function() {

  var gulp         = require('gulp')

  return gulp.src( 'src/scripts/*.js' )
    .pipe( require('gulp-plumber')() )
    .pipe( require('gulp-browserify')({
      insertGlobals: true,
      debug: true
    }) )
    .pipe( gulp.dest('dist/scripts/') )

}


