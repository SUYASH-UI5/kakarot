// gather search, btn, input from the DOM
const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

// Adding EventListener to the button
btn.addEventListener('click', () =>{
    search.classList.toggle('active');
    input.focus();
})