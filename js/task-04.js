const decrementBtnEl = document.querySelector('button[data-action="decrement"]')
const incrementBtnEl = document.querySelector('button[data-action="increment"]')
const velueEl = document.querySelector("#value")

let counterValue = 0;
decrementBtnEl.addEventListener('click', onClickBtnMinus);
incrementBtnEl.addEventListener('click', onClickBtnPlus);

function onClickBtnMinus(event) {
    counterValue -= 1;
    velueEl.textContent = counterValue;
    
};
function onClickBtnPlus(event) {
    counterValue += 1;
    velueEl.textContent = counterValue;
};