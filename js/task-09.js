const BtnEl = document.querySelector('.change-color')
const bodyEl = document.querySelector('body')
const textColorEl = document.querySelector('.color')

BtnEl.addEventListener('click', onColor)

function onColor(event) {
  bodyEl.style.backgroundColor = getRandomHexColor();
  textColorEl.textContent = `${getRandomHexColor()}`;

};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
