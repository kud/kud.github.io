module.exports = function() {

  var gulp   = require('gulp')
  var filter = require('gulp-filter')
  var _      = require('lodash')

  var cssFilter = filter('**/*.css')
  var svgFilter = filter('**/*.svg')

  return gulp.src('src/icons/**/*.svg')
    .pipe( require('gulp-plumber')() )
    .pipe( require('through2').obj(function( file, enc, cb ) {
      var fileString = file.contents.toString()

      _([
        /<title>.*<\/title>/gi,
        /<desc>.*<\/desc>/gi,
        /<!--.*-->/gi,
        /<defs>.*<\/defs>/gi,
        / +sketch:type=\"MSShapeGroup\"/gi,
        / +sketch:type=\"MSPage\"/gi,
        / +sketch:type=\"MSLayerGroup\"/gi,
        / +fill=\".*\"/gi
      ]).each(function( regex ) {
        fileString = fileString.replace(regex, '')
      })

      file.contents = new Buffer( fileString )
      this.push( file )

      cb()
    }) )
    .pipe(
      require('gulp-svg-symbols')({
        id: 'kud-Svg--%f',
        className: '.kud-Svg--%f',
        fontSize: 32,
        css: true
      })
    )
    .pipe( cssFilter )
    .pipe( gulp.dest('src/styles/shared/') )
    .pipe( cssFilter.restore() )
    .pipe( svgFilter )
    // .pipe( require('gulp-rename')('svg-symbols-common.twig') )
    .pipe( gulp.dest('src/images/') )

}
