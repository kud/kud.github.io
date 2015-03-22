module.exports = function() {

  var gulp    = require('gulp')

  return gulp.src('src/styles/*.css')
    .pipe( require('gulp-plumber')() )
    .pipe( require('gulp-cssnext')({
      url: false,
      features: {
        import: {
          path: [
            'node_modules'
          ]
        }
      }
    }))
    .pipe( gulp.dest('dist/styles/') )

}
