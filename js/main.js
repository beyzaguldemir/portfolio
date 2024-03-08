var menuBar = document.querySelector('.menu_bar');
var navLinks = document.querySelector('.nav_links');

if (navLinks) {
    navLinks.style.top = '-450px';

    menuBar.onclick = function () {
        if (navLinks.style.top === '-450px') {
            navLinks.style.top = '50px';
        } else {
            navLinks.style.top = '-450px';
        }
    }
} else {
    console.error("nav_links sınıfına sahip bir öğe bulunamadı.");
}