/**
 * Imports
 */
var gulp       = require('gulp')
var livereload = require('gulp-livereload')

/**
 * Helpers
 */
var taskPath = __dirname + '/tasks/'

/**
 * Private tasks
 */
gulp.task( 'clean', require(taskPath + 'clean') )
gulp.task( 'deploy', ['compile'], require(taskPath + 'deploy') )
gulp.task( 'icons', require(taskPath + 'icons'))
gulp.task( 'images', require(taskPath + 'images') )
gulp.task( 'scripts', ['validate'], require(taskPath + 'scripts') )
gulp.task( 'server', require(taskPath + 'server') )
gulp.task( 'static', require(taskPath + 'static') )
gulp.task( 'styles', require(taskPath + 'styles') )
gulp.task( 'validate', require(taskPath + 'validate') )

/**
 * Public tasks
 */
gulp.task('import', ['icons'])
gulp.task('compile', ['clean', 'static', 'images', 'scripts', 'styles'])
gulp.task('watch', ['server', 'compile'], function() {

  livereload.listen()

  gulp.watch( [
      'src/**/*',
      '!src/icons/',
      '!src/icons/**/*',
      '!src/images/',
      '!src/images/**/*',
      '!src/scripts/',
      '!src/scripts/**/*',
      '!src/styles/',
      '!src/styles/**/*',
    ], function() {
    gulp.start('static')
  })

  gulp.watch( [
      'src/images/**/*'
    ], function() {
    gulp.start('images')
  })

  gulp.watch( ['src/**/*.js'], function(){
    gulp.start('scripts')
  })

  gulp.watch( ['src/**/*.css'], function(){
    gulp.start('styles')
  })

  gulp.watch([
    'src/**/*'
  ]).on('change', livereload.changed)

})
