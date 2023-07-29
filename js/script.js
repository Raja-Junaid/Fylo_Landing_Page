const hamburger = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close');
const navMenu = document.querySelector('.modal');

hamburger.addEventListener('click', function () {
  navMenu.classList.remove('hidden');
  navMenu.classList.add('flex');
  document.body.classList.add('no-scroll');
});

closeBtn.addEventListener('click', function () {
  navMenu.classList.add('hidden');
  navMenu.classList.remove('flex');
  document.body.classList.remove('no-scroll');
});

navMenu.addEventListener('click', function () {
  navMenu.classList.add('hidden');
  navMenu.classList.remove('flex');
  document.body.classList.remove('no-scroll');
});

// Progress bar
const progessBarEl = document.getElementById('progress-bar');

window.addEventListener('scroll', () => {
  let height = document.body.scrollHeight - window.innerHeight;
  let scrollPosition = document.documentElement.scrollTop;
  let width = (scrollPosition / height) * 100;
  progessBarEl.style.width = `${width}%`;
});

// Scroll Animation
const sr = ScrollReveal({
  origin: 'top',
  distance: '100px',
  duration: 2500,
  reset: true,
});

sr.reveal('.left-ani', {
  origin: 'left',
});

sr.reveal('.right-ani', {
  origin: 'right',
});

sr.reveal('.bottom-ani', {
  origin: 'bottom',
});
