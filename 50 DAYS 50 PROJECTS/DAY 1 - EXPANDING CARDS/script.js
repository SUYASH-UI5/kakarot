// Get all panels in the variable
const panels = document.querySelectorAll('.panel')
// console.log(panels)

// Loop through all panels to add event listener to each panel
panels.forEach(panel =>{
    // console.log(panel);
    // Adding Event Listener to each panel so that when a panel is clicked active class is added to that panel & active class is removed from previous panel
    panel.addEventListener('click', () =>{
        // First remove active class from the previous panel
        removeActiveClass()
        panel.classList.add('active');
    })
})

function removeActiveClass(){
    panels.forEach(panel =>{
        panel.classList.remove('active');
    })
}