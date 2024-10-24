document.addEventListener("DOMContentLoaded", function() {
    fetch('db.json')
        .then(response => response.json())
        .then(data => {
            const shuffledData = shuffleArray(data); // Mezclar el arreglo aleatoriamente
            const tempat = document.querySelector('.works-list');
            const showMoreContainer = document.querySelector('.show-more-container');
            const showMoreBtn = document.getElementById('show-more-btn');
            let showAll = false;
            const maxItems = 3; // Limitar inicialmente a 3 items en todas las categorías
            let currentCategory = 'all'; // Almacenar la categoría actual

            function renderProjects(projects) {
                let cards = '';
                projects.forEach(d => {
                    cards += `<div class="works-card" data-att="${d.filter}">
                                <div class="card-image">
                                    <img src="${d.lokasi}" alt="${d.judul}">
                                </div>
                                <div class="card-text">
                                    <h4>${d.judul}</h4>
                                    <h3>${d.kategori}</h3>
                                    <p>${d.deskripsi}</p>
                                    <a class="cuy" data-id="${d.id}">Ver Mas</a>
                                </div>
                            </div>`;
                });
                tempat.innerHTML = cards;
                addEventListenersToButtons(shuffledData);
            }

            function addEventListenersToButtons(data) {
                const buttons = document.querySelectorAll('.cuy');
                buttons.forEach(button => {
                    button.addEventListener('click', function(e) {
                        e.preventDefault();
                        const id = this.dataset.id;
                        const filter = data.filter(d => d.id == id);
                        const detail = filter[0];
                        let card = '';
                        card += `<div class="modal-talk">
                                    <div class="modal-header">
                                        <h3>${detail.judul}</h3>
                                        <span id="span">X</span>
                                        <div class="card-image">
                                            <img src="${detail.lokasi}" alt="${detail.judul}">
                                        </div>
                                    </div>
                                    <div class="modal-body">
                                        <p class="artikel">${detail.deskripsi || 'Descripción no disponible'}</p>
                                        <button class="project-button" data-link="${detail.link}">Ver Proyecto</button>
                                        <div class="modal-footer">
                                            <button id="close">Cerrar</button>
                                        </div> 
                                    </div>
                                </div>`;
                        const modal = document.querySelector('.modal');
                        modal.innerHTML = card;
                        modals();

                        const modalButton = document.querySelector('.project-button');
                        modalButton.addEventListener('click', function() {
                            const link = this.dataset.link;
                            window.open(link, '_blank');
                        });
                    });
                });
            }

            function toggleShowMore() {
                showAll = !showAll;

                // Filtrar los proyectos según la categoría seleccionada y el estado de "Ver Más"
                const projectsToShow = showAll ? shuffledData : shuffledData.slice(0, maxItems);
                const filteredProjects = currentCategory === 'all' ? projectsToShow : filteredDataByCategory(currentCategory, showAll);

                renderProjects(filteredProjects);

                // Actualizar el texto del botón
                showMoreBtn.textContent = showAll ? "Ver Menos" : "Ver Más";

                // Desplazar solo si se selecciona "Ver Menos"
                if (!showAll) {
                    document.getElementById('works').scrollIntoView({ behavior: 'smooth' });
                }
            }

            function filteredDataByCategory(category, showAll) {
                const filteredProjects = shuffledData.filter(d => d.filter.toLowerCase() === category.toLowerCase());
                return showAll ? filteredProjects : filteredProjects.slice(0, maxItems);
            }

            showMoreBtn.addEventListener('click', toggleShowMore);

            function filterProjects(category) {
                currentCategory = category; // Actualizar la categoría actual

                let filteredProjects;
                if (category === 'all') {
                    // Filtrar para "all" y verificar si mostrar el botón "Ver Más"
                    filteredProjects = shuffledData;
                } else {
                    // Filtrar los proyectos según la categoría seleccionada
                    filteredProjects = shuffledData.filter(d => d.filter.toLowerCase() === category.toLowerCase());
                }

                // Mostrar u ocultar el botón "Ver Más" si hay más de 3 proyectos
                if (filteredProjects.length > maxItems) {
                    showMoreContainer.style.display = 'block';
                } else {
                    showMoreContainer.style.display = 'none';
                }

                // Mostrar 3 proyectos inicialmente y manejar el estado "Ver Más"
                renderProjects(showAll ? filteredProjects : filteredProjects.slice(0, maxItems));
            }

            // Inicializa mostrando todos los proyectos
            filterProjects('all');

            const categoryButtons = document.querySelectorAll('.works-button button');
            categoryButtons.forEach(button => {
                button.addEventListener('click', function() {
                    categoryButtons.forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');
                    const category = this.getAttribute('data-category');
                    filterProjects(category);
                });
            });

            // Manejo de navegación desde el Home
            window.scrollToSection = function(category) {
                document.getElementById('works').scrollIntoView({ behavior: 'smooth' });
                filterProjects(category); // Filtrar los proyectos según la categoría seleccionada
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                document.querySelector(`button[data-category="${category}"]`).classList.add('active');
            };
        });

    function modals() {
        const modalTalk = document.querySelector('.modal');
        const close = document.getElementById('close');
        const span = document.getElementById('span');

        modalTalk.style.display = "grid";

        close.addEventListener('click', function(e) {
            modalTalk.style.display = "none";
        });
        span.addEventListener('click', function() {
            modalTalk.style.display = "none";
        });
    }

    // Función para mezclar un arreglo aleatoriamente
    function shuffleArray(array) {
        return array.sort(() => Math.random() - 0.5);
    }
});
