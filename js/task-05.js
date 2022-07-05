// const inputEl = document.querySelector("#name-input")
// console.log(inputEl)
// const outputEl = document.querySelector("#name-output")
// console.log(outputEl)

const refs = {
    input: document.querySelector("#name-input"),
    output: document.querySelector("#name-output"),
};

refs.input.addEventListener('input', onInputChange)

function onInputChange(event) {
    console.log(event.currentTarget.value) 
    if (event.currentTarget.value === '') {
        return refs.output.textContent = 'Anonymous';;
    } else {
        refs.output.textContent = event.currentTarget.value
    }
}
