module.exports = function() {

  var gulp   = require('gulp')
  var deploy = require('gulp-gh-pages')

  return gulp.src('dist/**/*')
    .pipe(
      deploy({
        branch: 'master',
        cacheDir: '.deploy'
      })
    )

}
