module.exports = function() {

  return require('gulp').src('dist/**/*')
    .pipe(
      require('gulp-gh-pages')({
        branch: 'master'
      })
    )

}
