let boxes = document.querySelectorAll('.content-box');

window.addEventListener('scroll', reveal);
reveal();
function reveal() {
  let windowHeight = (window.innerHeight / 5) * 4;
  boxes.forEach(box => {
    let elementDistance = box.getBoundingClientRect().top;
    const elementVisible = 3;
    if (elementDistance < windowHeight - elementVisible) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
}
