const glow = document.querySelector('.cursor-glow');

document.addEventListener('pointermove', (e) => {
  if (glow) {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  }
});

window.addEventListener('load', function () {
  document.documentElement.classList.add('koi-ready');
});
