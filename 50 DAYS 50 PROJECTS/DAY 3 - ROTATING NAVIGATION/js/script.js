// Gather open, close buttons and container from DOM
const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');


// Add Event Listeners to open and close buttons
open.addEventListener('click', () => container.classList.add('show-nav'));

close.addEventListener('click', () => container.classList.remove('show-nav'));