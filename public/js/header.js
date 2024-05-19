document.addEventListener('DOMContentLoaded', function() {
    const burgerMenuIcon = document.getElementById('burger-tab');
    const enlaces = document.getElementById('enlaces-tab');

    burgerMenuIcon.addEventListener('click', function(e) {
        e.preventDefault();
        console.log(enlaces)
        enlaces.classList.toggle('show');
    });
});