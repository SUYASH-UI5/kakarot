let x = 0;
let arr = Array(); 
const addElementToArray = () =>{
    arr[x] = document.getElementById("input-box").value;
    alert("Element:  " + arr[x] + " added At index " + x);
    x++;
    document.getElementById("input-box").value = "";
}

const displayArray = () =>{
    let e = "<hr/>"
    for(let i = 0; i < arr.length; i++){
        e += "Element " + i + " = " + arr[i] + "<br/>";
    }
    document.getElementById("result").innerHTML = e;
}