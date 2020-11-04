// Program to remove duplicates from array
const arr = [34, 23, 56, 12, 78, 23, 90, 91, 90, 34, 'vegeto', 'kakarot', 'whis', 'beerus', 'Vegeto']
let result = arr.map((item) => {
    return typeof item === "string" ? item.toString().toUpperCase() : item
})
const uniqueArr = Array.from(new Set([...result]));
// Original Array
console.log(arr);

// Array after removing duplicates
console.log(uniqueArr);

