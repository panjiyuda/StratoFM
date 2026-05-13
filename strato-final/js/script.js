const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const playBtn = document.getElementById('playBtn');
let playing = false;

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => navMenu.classList.remove('active'));
});

playBtn.addEventListener('click', () => {
  playing = !playing;
  playBtn.innerHTML = playing ? '❚❚' : '▶';
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.18 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
