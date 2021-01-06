const boxes = document.querySelectorAll('.box');

// Adding eventlistener to window object
window.addEventListener('scroll', checkBoxes);
checkBoxes()

// function to bring boxes in the screen while scrolling
function checkBoxes(){
    // trigger point on screen to bring other boxes in 
    const triggerBottom = window.innerHeight / 5 * 4;
    boxes.forEach(box =>{
        const boxTop = box.getBoundingClientRect().top;
        if(boxTop < triggerBottom)
            box.classList.add('show');
        else    
            box.classList.remove('show');
    })
}