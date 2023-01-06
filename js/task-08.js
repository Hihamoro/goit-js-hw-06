const loginEl = document.querySelector('.login-form')


const formSubmit = function (event) {
    event.preventDefault();

    const { elements: { email, password }
} = event.currentTarget;

if (event.currentTarget.email.value === '' || event.currentTarget.password.value === '') {
    alert("Заповніть усі поля");
    return 
}

console.log({ email:event.currentTarget.email.value, password: event.currentTarget.password.value });

    event.currentTarget.reset();
}


loginEl.addEventListener('submit', formSubmit);