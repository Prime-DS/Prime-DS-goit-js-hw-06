const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');


inputEl.addEventListener('input', onСhangesInput)

function onСhangesInput(event) {
    textEl.style.fontSize = `${inputEl.value}px`
}
