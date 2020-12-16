import { nanoid } from 'nanoid';
const { nanoid } = require('nanoid');

const id = nanoid();
const email = document.getElementById('login-email');
const password = document.getElementById('login-password');
const loginButton = document.querySelector('.login-btn');

const inputs = {
    email: '',
    password: ''
};

function handleChange(e) {
    const { name, value } = e.target;
    inputs[name] = value;
}

function handleClick(e) {
    e.preventDefault();
    const email = inputs[email];
    const password = inputs[password];

    const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password
        })
    });


}

function init() {
    loginButton.addEventListener('click', handleClick);
    email.addEventListener('input', handleChange);
    password.addEventListener('input', handleChange);
}

init();