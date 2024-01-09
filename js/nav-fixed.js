// Path: js/nav-fixed.js

// scroll to fixed nav start
window.addEventListener('scroll', function(){
    const header = document.querySelector('nav');
    header.classList.toggle("nav-fixed", window.scrollY > 100);
});
// scroll to fixed nav end
