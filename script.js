const menu = document.querySelector('.menu');

let isDragging = false;
let startX;
let scrollStart;

menu.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.pageX - menu.offsetLeft;
  scrollStart = menu.scrollLeft;
  menu.style.cursor = 'grabbing';
});

menu.addEventListener('mouseleave', () => {
  isDragging = false;
  menu.style.cursor = 'grab';
});

menu.addEventListener('mouseup', () => {
  isDragging = false;
  menu.style.cursor = 'grab';
});

menu.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - menu.offsetLeft;
  const move = (x - startX);
  menu.scrollLeft = scrollStart - move;
});

menu.addEventListener('touchstart', (e) => {
  startX = e.touches[0].pageX - menu.offsetLeft;
  scrollStart = menu.scrollLeft;
});

menu.addEventListener('touchmove', (e) => {
  const x = e.touches[0].pageX - menu.offsetLeft;
  const move = (x - startX);
  menu.scrollLeft = scrollStart - move;
});
