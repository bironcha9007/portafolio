/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/* SCROLL REVEAL */

// BOTONES DE LA SECCION 1
ScrollReveal().reveal('.caja2', {
  distance: '300px',
  duration: 1000,
  opacity: 0,
  origin: 'bottom'
})

//SKILS

ScrollReveal().reveal('.titulo-skills', {
  distance: '300px',
  duration: 1000,
  origin: 'top',
  delay: 100
})

ScrollReveal().reveal('.caja-skills', {
  distance: '300px',
  duration: 1000,
  origin: 'right',
  delay: 100
})

//PROYECTOS
ScrollReveal().reveal('.titulo-projects', {
  distance: '800px',
  duration: 1000,
  opacity: 0,
  origin: 'left'
})

ScrollReveal().reveal('.proyecto', {
  distance: '200px',
  duration: 1000,
  opacity: 0,
  origin: 'bottom'
})

ScrollReveal().reveal('.titulo-more-projects', {
  duration: 1000,
  opacity: 0,
  scale: 0
})

// CONTACT
ScrollReveal().reveal('.caja-contact', {
  distance: '800px',
  duration: 1000,
  origin: 'left'
})
///////////////////////////////////////////////////////////


//RENDERIZAR LOS TRABAJOS DINAMICAMENTE////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

TRABAJOS.forEach((trabajo) => {
  crearTarjeta(trabajo)
})

function crearTarjeta(trabajo) {
  const contenedor = document.getElementById('contenedor-proyectos')
  const template = document.getElementById('template-proyecto')
  //////////////////////////////
  const fragmento = document.createDocumentFragment()
  const clon = template.content.cloneNode(true)
  //////////////////////////////
  clon.querySelector('.nombre').textContent = trabajo.nombre
  clon.querySelector('.fecha').textContent = trabajo.fecha
  clon.querySelector('.descripcion').textContent = trabajo.descripcion
  clon.querySelector('.proyecto').style.backgroundImage = `url(${trabajo.imagen})`
  clon.querySelector('.link-website').href = trabajo.website
  clon.querySelector('.link-github').href = trabajo.github
  //////////////////////////////
  fragmento.append(clon)
  contenedor.prepend(fragmento)
}
