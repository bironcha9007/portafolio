let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');
let currentIndex = 0;
let images = document.querySelectorAll('.image-slider img');
let mainImage = document.querySelector('.main-home-image');
let autoChange;  // Variable para manejar el intervalo
let homeSection = document.querySelector('.home'); // Selecciona la sección "home"

// Cambiar clases del menú
menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

// Función para iniciar el cambio automático
function startAutoChange() {
    autoChange = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length; // Ciclar entre las imágenes
        mainImage.src = images[currentIndex].getAttribute('src'); // Cambiar la imagen principal
    }, 4000); // Cambia cada 2 segundos
}

// Función para detener el cambio automático
function stopAutoChange() {
    clearInterval(autoChange);
}

// Cambiar la imagen principal cuando se hace clic en una imagen del slider
images.forEach((img, index) => {
    img.onclick = () => {
        let src = img.getAttribute('src');
        mainImage.src = src; // Cambia la imagen principal
        currentIndex = index; // Actualiza el índice actual
        stopAutoChange(); // Detener el cambio automático al hacer clic en una imagen
    };
});

// Al hacer clic en la imagen principal, redirige al id correspondiente
mainImage.onclick = () => {
    let targetId = images[currentIndex].getAttribute('data-target');
    if (targetId) {
        window.location.hash = `#${targetId}`; // Redirigir al id correspondiente
    }
}

// Detectar clic fuera de la sección "home" para reiniciar el cambio automático
document.addEventListener('click', (event) => {
    if (!homeSection.contains(event.target)) {
        stopAutoChange(); // Reiniciar el cambio automático al hacer clic fuera de "home"
    }
});

// Iniciar el cambio automático al cargar la página
startAutoChange();

// Inicialización del swiper
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop : true,
    grabCursor: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
    },
});


