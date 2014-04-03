// import
var gulp = require('gulp')
  , rimraf = require('rimraf')
  , streamqueue = require('streamqueue')
  , notifier = require('node-notifier')
  , lr = require('tiny-lr')
  , server = lr()

var concat = require('gulp-concat')
  , plumber = require('gulp-plumber')
  , jshint = require('gulp-jshint')
  , rework = require('gulp-rework')
  , autoprefixer = require('gulp-autoprefixer')
  , browserify = require('gulp-browserify')
  , livereload = require('gulp-livereload')
  , iconfont = require('gulp-iconfont')
  , iconfontCss = require('gulp-iconfont-css')
  , declare = require('gulp-declare')
  , replace = require('gulp-replace')
  , imagemin = require('gulp-imagemin')

// rework
var reworkPlugins = {
  parent: require('rework-parent'),
  importer: require('rework-importer')
}

/**
 * Tasks
 */

// clean
gulp.task("clean", function() {
  return rimraf.sync('dist/')
})

// assets
gulp.task('assets', function() {
  return gulp.src('src/assets/**/*')
    .pipe( gulp.dest('dist/') )
    .pipe( livereload( server ) )
})

// scripts
gulp.task('scripts:desktop', function() {
  return gulp.src('src/scripts/desktop.js')
    .pipe( plumber() )
    .pipe( concat('main.js', { newLine: ';' } ) )
    .pipe( gulp.dest('dist/scripts/') )
    .pipe( livereload( server ) )
})

gulp.task('scripts:mobile', function() {
  return gulp.src('src/scripts/mobile.js')
    .pipe( plumber() )
    .pipe( concat('main-mobile.js', { newLine: ';' } ) )
    .pipe( gulp.dest('dist/scripts/') )
    .pipe( livereload( server ) )
})

// check scripts
gulp.task('jshint', function() {
  return gulp.src( 'src/scripts/**/*' )
    .pipe( plumber() )
    .pipe( jshint('.jshintrc'))
    .pipe( jshint.reporter('jshint-stylish') )
})

// styles
gulp.task('styles:desktop', function() {
  return streamqueue({ objectMode: true },
      gulp.src('bower-components/normalize-css/normalize.css'),
      gulp.src('src/styles/import-desktop.css')
        .pipe( plumber() )
        .pipe( rework(
          reworkPlugins.importer({ path: 'src/styles/' }),
          reworkPlugins.parent,
          {
            sourcemap: true
          }
        ) )
        .pipe( autoprefixer("last 2 versions", "> 5%", "Android 4", "Firefox > 25") )
    )
    .pipe( concat('main.css') )
    .pipe( gulp.dest('dist/styles/') )
    .pipe( livereload( server ) )
})

gulp.task('styles:mobile', function() {
  return streamqueue({ objectMode: true },
      gulp.src('bower-components/normalize-css/normalize.css'),
      gulp.src('src/styles/import-mobile.css')
        .pipe( plumber() )
        .pipe( rework(
          reworkPlugins.importer({ path: 'src/styles/' }),
          reworkPlugins.parent,
          {
            sourcemap: true
          }
        ) )
        .pipe( autoprefixer("last 2 versions", "> 5%", "Android 4", "Firefox > 25") )
    )
    .pipe( concat('main-mobile.css') )
    .pipe( gulp.dest('dist/styles/') )
    .pipe( livereload( server ) )
})


// optimise image
gulp.task('images', function() {
 return gulp.src('src/images/**/*')
    .pipe( imagemin() )
    .pipe( gulp.dest('dist/images') )
    .pipe( livereload( server ) )
})

// glyphicons
gulp.task('glyphicons', function() {
 return gulp.src('src/glyphicons/**/*')
    .pipe(iconfontCss({
      fontName: 'icons',
      targetPath: '../../styles/shared/icons.css',
      fontPath: '../fonts/'
    }))
    .pipe(iconfont({
      fontName: 'icons'
     }))
    .pipe( gulp.dest('src/assets/fonts') )
})

// watch
gulp.task('watch', function () {

  // listen on port 35729
  server.listen(35729, function (err) {
    if ( err ) {
      return console.log( err )
    }

    gulp.watch( [ 'src/assets/**/*' ], ['assets'] )
    gulp.watch( [ 'src/scripts/**/*' ], ['jshint', 'scripts:desktop', 'scripts:mobile'] )
    gulp.watch( [ 'src/styles/**/*' ], ['styles:desktop', 'styles:mobile'] )
    gulp.watch( [ 'src/images/**/*' ], ['images'] )
  })

})

/**
 * Commands
 */

gulp.task('dev', ['clean'], function() {
  gulp.start('assets', 'glyphicons', 'styles:desktop', 'styles:mobile', 'jshint', 'scripts:desktop', 'scripts:mobile', 'images')
})

gulp.task('default', ['dev'], function() {
  gulp.start('watch')
})
