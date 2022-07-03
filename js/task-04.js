const decrementBtnEl = document.querySelector('button[data-action="decrement"]')
const incrementBtnEl = document.querySelector('button[data-action="increment"]')
const velueEl = document.querySelector("#value")

let counterValue = 0;
decrementBtnEl.addEventListener('click', onClickBtnMinus);
incrementBtnEl.addEventListener('click', onClickBtnPlus);

function onClickBtnMinus(event) {
    velueEl.textContent = counterValue;
    counterValue -= 1;
};
function onClickBtnPlus(event) {
    velueEl.textContent = counterValue;
    counterValue += 1;
};