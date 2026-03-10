/* ============================================
   cursor.js — Custom animated cursor (desktop only)
   ============================================ */
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('ring') || document.getElementById('cursor-ring');

if (cursor && ring && window.matchMedia('(pointer: fine)').matches) {
  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top  = my + 'px';
  });

  function animateRing() {
    rx += (mx - rx) * 0.14;
    ry += (my - ry) * 0.14;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  const hoverEls = document.querySelectorAll(
    'a, button, .service-card, .why-card, .process-step, .quick-btn, input, textarea, select'
  );
  hoverEls.forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
}
