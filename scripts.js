document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', function () {
        navMenu.classList.toggle('showing');
    });
});

let currentIndex = 0;
const images = document.querySelectorAll('.carousel-inner img');
const totalImages = images.length;

function showNextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalImages;
    images[currentIndex].classList.add('active');
}

setInterval(showNextImage, 10000); // 10 secondes pour chaque image

function resetAnimation() {
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.style.animation = 'none';
    carouselInner.offsetHeight; /* trigger reflow */
    carouselInner.style.animation = '';
}

// Reset animation after last image
images[totalImages - 1].addEventListener('animationend', resetAnimation);
