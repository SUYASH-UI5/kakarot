// gather all labels from DOM
const labels = document.querySelectorAll('.form-control label');

// to separate each letter of label text and turn it into array and then adding a span to each letter
labels.forEach(label =>{
    label.innerHTML = label.innerText
    .split('')   
    .map((letter, index) => `<span style = "transition-delay:${index * 50}ms">${letter}</span>`)
    .join('');  // joining each letter to convert it into string
})