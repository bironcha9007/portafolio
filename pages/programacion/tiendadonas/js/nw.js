let imageIndex = 0;
const images2 = document.querySelectorAll('.image-slider2 img');
const changeInterval2 = 4000; // 4 segundos

// Función para cambiar la imagen activa
function changeImage2() {
    images2.forEach((img, index) => {
        img.classList.remove('active');
        if (index === imageIndex) {
            img.classList.add('active');
        }
    });
    
    // Incrementar el índice y reiniciar si llega al final
    imageIndex = (imageIndex + 1) % images2.length;
}

// Cambiar la imagen automáticamente cada 4 segundos
let sliderInterval = setInterval(changeImage2, changeInterval2);

// Asignar el evento de clic a todas las imágenes
images2.forEach((img) => {
    img.addEventListener('click', () => {
        // Verificar si la imagen está activa
        if (img.classList.contains('active')) {
            const target = img.getAttribute('data-target2'); // Cambiado de data-link a data-target
            window.location.href = target;  // Redirigir al enlace del data-target
        }
    });
});

// Iniciar el slider con la primera imagen activa
images2[0].classList.add('active');
// Iniciar el slider con la primera imagen activa


function openNewWindow1() {
    // URL a la que quieres dirigirte
    const url = 'https://bironcha9007.github.io/portafolio/index.html';
  
    // Abre una nueva ventana con la URL proporcionada y algunos ajustes opcionales
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
  
    // Verifica si la ventana emergente se abrió correctamente
    if (newWindow) {
      // La ventana emergente se abrió con éxito
      newWindow.focus(); // Enfoca la nueva ventana
    } else {
      // Es posible que el navegador bloquee la apertura de ventanas emergentes
      alert('La ventana emergente ha sido bloqueada por el navegador. Habilita las ventanas emergentes para ver esta página.');
    }
  }

  function openNewWindow2() {
    // URL a la que quieres dirigirte
    const url = 'https://visualgraphicmd.com.co/pages/programacion/MATRIX/index.html';
  
    // Abre una nueva ventana con la URL proporcionada y algunos ajustes opcionales
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
  
    // Verifica si la ventana emergente se abrió correctamente
    if (newWindow) {
      // La ventana emergente se abrió con éxito
      newWindow.focus(); // Enfoca la nueva ventana
    } else {
      // Es posible que el navegador bloquee la apertura de ventanas emergentes
      alert('La ventana emergente ha sido bloqueada por el navegador. Habilita las ventanas emergentes para ver esta página.');
    }
  }
  function openNewWindow3() {
    // URL a la que quieres dirigirte
    const url = 'https://visualgraphicmd.com.co/pages/programacion/paint/index.html';
  
    // Abre una nueva ventana con la URL proporcionada y algunos ajustes opcionales
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
  
    // Verifica si la ventana emergente se abrió correctamente
    if (newWindow) {
      // La ventana emergente se abrió con éxito
      newWindow.focus(); // Enfoca la nueva ventana
    } else {
      // Es posible que el navegador bloquee la apertura de ventanas emergentes
      alert('La ventana emergente ha sido bloqueada por el navegador. Habilita las ventanas emergentes para ver esta página.');
    }
  }
  function openNewWindow4() {
    // URL a la que quieres dirigirte
    const url = 'https://visualgraphicmd.com.co/pages/programacion/chat-box-3/index.html';
  
    // Abre una nueva ventana con la URL proporcionada y algunos ajustes opcionales
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
  
    // Verifica si la ventana emergente se abrió correctamente
    if (newWindow) {
      // La ventana emergente se abrió con éxito
      newWindow.focus(); // Enfoca la nueva ventana
    } else {
      // Es posible que el navegador bloquee la apertura de ventanas emergentes
      alert('La ventana emergente ha sido bloqueada por el navegador. Habilita las ventanas emergentes para ver esta página.');
    }
  }
  function openNewWindow5() {
    // URL a la que quieres dirigirte
    const url = 'https://visualgraphicmd.com.co/pages/programacion/tetris/index.html';
  
    // Abre una nueva ventana con la URL proporcionada y algunos ajustes opcionales
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
  
    // Verifica si la ventana emergente se abrió correctamente
    if (newWindow) {
      // La ventana emergente se abrió con éxito
      newWindow.focus(); // Enfoca la nueva ventana
    } else {
      // Es posible que el navegador bloquee la apertura de ventanas emergentes
      alert('La ventana emergente ha sido bloqueada por el navegador. Habilita las ventanas emergentes para ver esta página.');
    }
  }
  function openNewWindow6() {
    // URL a la que quieres dirigirte
    const url = 'https://visualgraphicmd.com.co/pages/programacion/cruzar/index.html';
  
    // Abre una nueva ventana con la URL proporcionada y algunos ajustes opcionales
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
  
    // Verifica si la ventana emergente se abrió correctamente
    if (newWindow) {
      // La ventana emergente se abrió con éxito
      newWindow.focus(); // Enfoca la nueva ventana
    } else {
      // Es posible que el navegador bloquee la apertura de ventanas emergentes
      alert('La ventana emergente ha sido bloqueada por el navegador. Habilita las ventanas emergentes para ver esta página.');
    }
  }
  function openNewWindow7() {
    // URL a la que quieres dirigirte
    const url = 'https://visualgraphicmd.com.co/pages/programacion/rubik/index.html';
  
    // Abre una nueva ventana con la URL proporcionada y algunos ajustes opcionales
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
  
    // Verifica si la ventana emergente se abrió correctamente
    if (newWindow) {
      // La ventana emergente se abrió con éxito
      newWindow.focus(); // Enfoca la nueva ventana
    } else {
      // Es posible que el navegador bloquee la apertura de ventanas emergentes
      alert('La ventana emergente ha sido bloqueada por el navegador. Habilita las ventanas emergentes para ver esta página.');
    }
  }
  function openNewWindow8() {
    // URL a la que quieres dirigirte
    const url = 'https://visualgraphicmd.com.co/pages/programacion/tiendatec/index.html';
  
    // Abre una nueva ventana con la URL proporcionada y algunos ajustes opcionales
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
  
    // Verifica si la ventana emergente se abrió correctamente
    if (newWindow) {
      // La ventana emergente se abrió con éxito
      newWindow.focus(); // Enfoca la nueva ventana
    } else {
      // Es posible que el navegador bloquee la apertura de ventanas emergentes
      alert('La ventana emergente ha sido bloqueada por el navegador. Habilita las ventanas emergentes para ver esta página.');
    }
  }
  function openNewWindow9() {
    // URL a la que quieres dirigirte
    const url = 'https://visualgraphicmd.com.co/pages/programacion/chat-box-3/index.html';
  
    // Abre una nueva ventana con la URL proporcionada y algunos ajustes opcionales
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
  
    // Verifica si la ventana emergente se abrió correctamente
    if (newWindow) {
      // La ventana emergente se abrió con éxito
      newWindow.focus(); // Enfoca la nueva ventana
    } else {
      // Es posible que el navegador bloquee la apertura de ventanas emergentes
      alert('La ventana emergente ha sido bloqueada por el navegador. Habilita las ventanas emergentes para ver esta página.');
    }
  }
  
  function openNewWindowWS() {
    // Mensaje que deseas agregar al final de la URL
    const mensaje = 'Me%20deseo%20comunicar%20con%20Visual%20Graphics';
  
    // URL a la que quieres dirigirte
    const url = `https://wa.me/573214076057?text=${mensaje}`;
  
    // Abre una nueva ventana con la URL proporcionada y algunos ajustes opcionales
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
  
    // Verifica si la ventana emergente se abrió correctamente
    if (newWindow) {
      // La ventana emergente se abrió con éxito
      newWindow.focus(); // Enfoca la nueva ventana
    } else {
      // Es posible que el navegador bloquee la apertura de ventanas emergentes
      alert('La ventana emergente ha sido bloqueada por el navegador. Habilita las ventanas emergentes para ver esta página.');
    }
  }

  function openNewWindowVG() {
    // Mensaje que deseas agregar al final de la URL

  
    // URL a la que quieres dirigirte
    const url = `https://bironcha9007.github.io/portafolio/index.html`;
  
    // Abre una nueva ventana con la URL proporcionada y algunos ajustes opcionales
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
  
    // Verifica si la ventana emergente se abrió correctamente
    if (newWindow) {
      // La ventana emergente se abrió con éxito
      newWindow.focus(); // Enfoca la nueva ventana
    } else {
      // Es posible que el navegador bloquee la apertura de ventanas emergentes
      
    }
  }
  function scrollToSectiona(sectionId) {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    } else {
        console.error(`Element with id ${sectionId} not found.`);
    }
  }
  
  function scrollToSection(category) {
    const worksSection = document.getElementById('works');
    const categoryButtons = worksSection.querySelectorAll('.works-button button');
    const worksList = worksSection.querySelector('.works-list');
    
    // Filtrar los botones por categoría y obtener el índice del botón correspondiente
    const index = Array.from(categoryButtons).findIndex(button => button.textContent.toLowerCase() === category.toLowerCase());

    if (index !== -1) {
        // Si se encuentra el botón, desplazarse a la sección de proyectos y activar el botón correspondiente
        const targetElement = categoryButtons[index];
        const targetTop = targetElement.offsetTop;
        
        window.scrollTo({
            top: targetTop,
            behavior: 'smooth'
        });

        // Quitar la clase 'active' de todos los botones y agregarla al botón correspondiente
        categoryButtons.forEach(button => button.classList.remove('active'));
        targetElement.classList.add('active');

        // Filtrar y mostrar los proyectos correspondientes a la categoría seleccionada
        const projects = document.querySelectorAll('.works-card');
        projects.forEach(project => {
            if (category.toLowerCase() === 'all' || project.dataset.att.toLowerCase() === category.toLowerCase()) {
                project.style.display = 'flex';
            } else {
                project.style.display = 'none';
            }
        });
    }
}

