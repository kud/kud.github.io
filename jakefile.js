var chalk      = require('chalk')

desc('Update environnement.')
task('update', function() {

  console.log( chalk.blue('❯ Updating...\n') )

  jake.exec('npm update', { interactive: true }, function() {
    console.log( chalk.green('\n✔ Updated!') )
  })

})

desc('Compile assets.')
task('compile', function() {

  console.log( chalk.blue('❯ Compiling...\n') )

  jake.exec('gulp compile', { interactive: true }, function() {
    console.log( chalk.green('\n✔ Compiled!') )
  })

})

desc('Import assets.')
task('import', function() {

  console.log( chalk.blue('❯ Importing...\n') )

  jake.exec('gulp import', { interactive: true }, function() {
    console.log( chalk.green('\n✔ Imported!') )
  })

})

desc('Watch your files.')
task('watch', function() {

  console.log( chalk.blue('❯ Watching...\n') )

  console.log( 'ctrl+c to quit...\n' )

  jake.exec('gulp watch', { interactive: true })

})

desc('Deploy on gh-pages.')
task('deploy', function() {

  console.log( chalk.blue('❯ Deploying...\n') )

  jake.exec('gulp deploy', { interactive: true }, function() {
    console.log( chalk.green('\n✔ Deployed!') )
  })

})

task('default', jake.showAllTaskDescriptions)
