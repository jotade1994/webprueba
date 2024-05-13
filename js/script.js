let currentImageIndex = 0;
const images = document.querySelectorAll('.carousel img');
const dots = document.querySelectorAll('.carousel .dot');
const leftArrow = document.querySelector('.carousel .left');
const rightArrow = document.querySelector('.carousel .right');
let interval; // Variable para almacenar el intervalo

function showImage(index) {
    images[currentImageIndex].classList.remove('active');
    dots[currentImageIndex].classList.remove('active');
    currentImageIndex = index;
    images[currentImageIndex].classList.add('active');
    dots[currentImageIndex].classList.add('active');
}

function startInterval() {
    if (interval) {
        clearInterval(interval); // Limpia el intervalo actual si existe
    }
    interval = setInterval(() => {
        const newIndex = (currentImageIndex + 1) % images.length;
        showImage(newIndex);
    }, 6000);
}

leftArrow.addEventListener('click', () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(newIndex);
    startInterval(); // Reinicia el intervalo después de hacer clic
});

rightArrow.addEventListener('click', () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    showImage(newIndex);
    startInterval(); // Reinicia el intervalo después de hacer clic
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showImage(index);
        startInterval(); // Reinicia el intervalo después de hacer clic
    });
});

startInterval(); // Inicia el intervalo cuando se carga la página
