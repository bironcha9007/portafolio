document.addEventListener("DOMContentLoaded", function() {
    const bar = document.querySelector('.nav-toogle');
    const linksz = document.querySelector('.links');
    const body = document.body;

    bar.addEventListener('click', function(){
        linksz.classList.toggle('show-links');
        if (linksz.classList.contains('show-links')) {
            body.style.overflow = 'hidden'; // Desactiva el desplazamiento del cuerpo cuando el menú está abierto
        } else {
            body.style.overflow = ''; // Restaura el desplazamiento del cuerpo cuando el menú está cerrado
        }
    });

    document.querySelectorAll('.links a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
            linksz.classList.remove('show-links'); // Oculta el menú después de hacer clic en un enlace
            body.style.overflow = ''; // Restaura el desplazamiento del cuerpo cuando se hace clic en un enlace
        });
    });

    // Ocultar el menú al hacer clic en cualquier parte fuera del menú o del botón de menú
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = linksz.contains(event.target);
        const isClickOnMenuButton = bar.contains(event.target);
        if (!isClickInsideMenu && !isClickOnMenuButton) {
            linksz.classList.remove('show-links');
            body.style.overflow = ''; // Restaura el desplazamiento del cuerpo cuando se hace clic fuera del menú
        }
    });
});