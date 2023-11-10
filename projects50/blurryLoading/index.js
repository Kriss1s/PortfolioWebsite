let percent = 100;
const background = document.querySelector('.bg');
const number = document.querySelector('.loading-text');

const blur = setInterval(blurring, 30);

function blurring() {
  percent--;
  background.style.filter = `blur(${30 * (percent / 100)}px)`;
  number.innerHTML = `${percent}%`;
  number.style.opacity = `${percent}%`;
  console.log(percent / 100);

  if (percent === 0) {
    clearInterval(blur);
  }
}
