// Gather progress, next & prev button from DOM
const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

// Gather all circles from the DOM
const circles = document.querySelectorAll('.circle');

// variable to keep track of current active circle
let currentActive = 1;

// Add Event Listeners to the buttons
next.addEventListener('click', () =>{
    currentActive ++;
    if(currentActive > circles.length)
        currentActive = circles.length;
    
    // Update the DOM
    update()
})

prev.addEventListener('click', () =>{
    currentActive--;
    if(currentActive === 1)
        currentActive = 1;

    // Update the DOM
    update()
})

function update(){
    // Adding/Removing active class when prev/next button is clicked
    circles.forEach((circle, index) =>{
        if(index < currentActive)
            circle.classList.add('active');
        else
            circle.classList.remove('active');
    })
    const actives = document.querySelectorAll('.active');
    console.log(actives);

    // Handling Progress Lines
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';
    console.log(progress.style.width);

    // Handling Prev/Next buttons
    if(currentActive === 1)
        prev.disabled = true;
    
    else if(currentActive === circles.length)
        next.disabled = true;
    
    else{
        prev.disabled = false;
        next.disabled = false;
    }
}