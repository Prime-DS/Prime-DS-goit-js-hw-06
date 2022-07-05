const formEl = document.querySelector('.login-form');
console.log(formEl);
formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const mail = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;
    if (mail === '' || password === '') {
        return alert('Все поля должны быть заполнены!')
    } else {
         const formData = {
        mail,
        password,
        };
    console.log(formData);
    }

    return formEl.reset();
}
