document.addEventListener('DOMContentLoaded', function () {
    var email = document.getElementById('email');
    email.href = ['mailto', ':', 'm', '@', 'kud', '.', 'io'].join('');
});
