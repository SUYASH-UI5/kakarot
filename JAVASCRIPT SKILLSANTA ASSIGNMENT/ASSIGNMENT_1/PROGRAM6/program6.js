let str = "Behold The Power Of Ultra Instinct"

// function to truncate strings as mentioned in number
const truncate = (str, number) => str.split(" ").slice(0, number).join(" ")
// const truncate = (str, number) =>{
//     str = str.split(" ")
//     return str.slice(0, number).join(" ")
// }
console.log(truncate(str, 5))
