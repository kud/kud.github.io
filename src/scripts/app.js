document.addEventListener('DOMContentLoaded', function () {

  function addAlternative( e ) {
    e.preventDefault()

    this.className = this.className + " kud-Header--alternative"
    about.className = about.className.replace(/kud-About--hidden/g, '')
    aboutLink.removeEventListener('click', addAlternative)
  }

  var email = document.getElementById('kud-Email')
  email.href = ['mailto', ':', 'm', '@', 'kud', '.', 'io'].join('')

  var aboutLink = document.getElementById('kud-AboutLink')
    , about = document.getElementById('kud-About')

  aboutLink.addEventListener('click', addAlternative)
})
