const button = document.querySelector('#toggle');
const nav = document.querySelector('#nav');

button.addEventListener('click', ()=> nav.classList.toggle('active'));