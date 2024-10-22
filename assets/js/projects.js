document.addEventListener("DOMContentLoaded", function() {
    fetch('db.json')
        .then(response => response.json())
        .then(data => {
            // Mezcla el arreglo de datos aleatoriamente
            const shuffledData = shuffleArray(data);
            const tempat = document.querySelector('.works-list');
            const showMoreContainer = document.querySelector('.show-more-container');
            const showMoreBtn = document.getElementById('show-more-btn');
            let showAll = false;
            const maxItems = 4;
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
                
                // Filtra los proyectos según la categoría seleccionada y si está activo "ver más"
                const projectsToShow = showAll ? shuffledData : shuffledData.slice(0, maxItems);
                const filteredProjects = currentCategory === 'all' ? projectsToShow : filteredDataByCategory(currentCategory, showAll);
                
                renderProjects(filteredProjects);
                
                // Actualiza el texto del botón
                showMoreBtn.textContent = showAll ? "Ver Menos" : "Ver Más";
                
                // Desplazarse hacia la parte superior de la sección "works"
                document.getElementById('works').scrollIntoView({ behavior: 'smooth' });
            }
            
            function filteredDataByCategory(category, showAll) {
                const filteredProjects = shuffledData.filter(d => d.filter.toLowerCase() === category.toLowerCase());
                return showAll ? filteredProjects : filteredProjects.slice(0, maxItems);
            }
            
            showMoreBtn.addEventListener('click', toggleShowMore);

            function filterProjects(category) {
                currentCategory = category; // Actualizar la categoría actual
                const filteredProjects = category === 'all' ? (showAll ? shuffledData : shuffledData.slice(0, maxItems)) : filteredDataByCategory(category, showAll);
                renderProjects(filteredProjects);

                // Mostrar el botón "Ver Más" solo si hay más elementos que mostrar
                if (category === 'all' || filteredProjects.length > maxItems) {
                    showMoreContainer.style.display = 'block';
                } else {
                    showMoreContainer.style.display = 'none';
                }
            }

            // Inicializa mostrando todos los proyectos
            renderProjects(shuffledData);

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
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    }
});
