const random = (items) => items[Math.floor(Math.random() * items.length)];

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const w = window.innerWidth;
const h = window.innerHeight;
canvas.width = w;
canvas.height = h;

const state = {
  color: 'rgb(255, 0, 0)',
  size: 25,
  charset: ['v', 'i','s','u', 'a','l'],
  fps: 15
};

const p = Array(Math.ceil(w / state.size)).fill(0);

const draw = () => {
  ctx.fillStyle = 'rgba(0, 0, 0, .05)';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = state.color;

  ctx.font = state.size + 'px sans-serif';
  for (let i = 0; i < p.length; i++) {
    let v = p[i];
    if (v <= 0 || Math.random() > 0.95) {
      p[i] = Math.random() * -h; // Aparecer desde la parte superior
    }
    ctx.fillText(random(state.charset), i * state.size, v);
    p[i] += state.size; // Incrementar la posición vertical hacia abajo
  }
};

let interval = setInterval(draw, 500 / state.fps);

function disableScroll() {
  document.body.classList.add('no-scroll');
}

function enableScroll() {
  document.body.classList.remove('no-scroll');
}

document.body.addEventListener('touchmove', (e) => {
  if (document.body.classList.contains('no-scroll')) {
    e.preventDefault();
  }
});

