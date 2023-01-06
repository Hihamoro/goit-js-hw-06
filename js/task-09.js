function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorBtn = document.querySelector('.change-color')
const colorSpan = document.querySelector('.color')

function newColor() {
  let color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  colorSpan.textContent = color;
}

colorBtn.addEventListener('click', newColor)