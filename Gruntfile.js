module.exports = function( grunt ) {

  // import
  grunt.loadNpmTasks('grunt-gh-pages')

  // config
  grunt.initConfig({

    'gh-pages': {
      options: {
        base: 'dist',
        branch: 'master'
      },
      src: ['**/*']
    }

  })

  // tasks
  // grunt.registerTask('default', []);

}
