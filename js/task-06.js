const inputEl = document.querySelector("input");
const inputLength = +inputEl.dataset.length;

inputEl.addEventListener('blur', onFocusInput);

function onFocusInput(event) {
    if (event.currentTarget.value.length === inputLength) {
        inputEl.classList.remove('invalid');
        return inputEl.classList.add('valid');
    }
    return inputEl.classList.add('invalid');
};