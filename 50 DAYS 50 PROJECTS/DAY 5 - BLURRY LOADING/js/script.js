// Bring loadText & bg from DOM
const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

// to set loading text value
let load = 0;

let int = setInterval(blurring, 30);

function blurring(){
    load++;
    if(load > 99)
        clearInterval(int);

    // Modifying load text value opacity
    loadText.innerText = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0);

    // Modifying background image blurring
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
    
}

// function to map load value with load text opacity and background image blur value
const scale = (num, in_min, in_max, out_min, out_max) =>{
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}