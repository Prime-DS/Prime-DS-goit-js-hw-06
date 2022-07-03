const BtnEl = document.querySelector('.change-color')
const bodyEl = document.querySelector('body')
BtnEl.addEventListener('click', onColor)

function onColor(event) {
  bodyEl.style.backgroundColor = getRandomHexColor()
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
