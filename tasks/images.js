module.exports = function() {

  var gulp = require('gulp')

  return gulp.src( 'src/images/**/*' )
    .pipe( require('gulp-imagemin')() )
    .pipe( gulp.dest('dist/images/') )

}
