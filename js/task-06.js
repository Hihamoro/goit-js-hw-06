const inputEl = document.querySelector('#validation-input')
const dataEl = document.querySelector('input[data-length="6"]')

inputEl.addEventListener('blur', () => {
    if (inputEl.value.length === +dataEl.dataset.length) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }
})
