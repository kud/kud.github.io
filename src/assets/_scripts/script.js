document.addEventListener('DOMContentLoaded', function () {
    var email = document.getElementById('email');
    email.href = ['mailto', ':', 'm', '@', 'kud', '.', 'io'].join('');

    if(!window.location.hash) { window.location = "/#myself"; }
});
