const getSize = () =>{
    let windowWidth = document.documentElement.clientWidth;
    let windowHeight = document.documentElement.clientHeight;

    // put result into div
    document.getElementById("wh").innerHTML = "<h1> Width:  " + windowWidth + " Height: " + windowHeight + "</h1>";
}