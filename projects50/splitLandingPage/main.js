const left = document.querySelector('.left');
const right = document.querySelector('.right');
const body = document.querySelector('body');

left.addEventListener('mouseenter', () => body.classList.add('hover-left'));
left.addEventListener('mouseleave', () => body.classList.remove('hover-left'));

right.addEventListener('mouseenter', () => body.classList.add('hover-right'));
right.addEventListener('mouseleave', () =>
  body.classList.remove('hover-right')
);
