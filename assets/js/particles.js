window.onload = function () {
    Particles.init({
        selector: ".background",
        color: ["#c0c0c0", "#007700","#c0c0c0", "#009929"],
        connectParticles: true,
        maxParticles: 150,
        responsive: [
            {
                breakpoint: 1000,
                options: {
                    color: ["#c0c0c0", "#007700","#c0c0c0", "#009929"],
                    maxParticles: 75,  // Ajusta este valor según lo que funcione mejor para tu diseño
                    connectParticles: true,
                    connectRadius: 150   // Ajusta este valor para que las líneas sean visibles en dispositivos móviles en orientación vertical
                }
            }
        ]
    });


};