// To find LCM
let num1 = 12
let num2 = 24
// function to find LCM
const findLCM = (num1, num2)=>{
    let greater, lcm;
    if(num1 > num2)
        greater = num1;
    else
        greater = num2;
    while(true){
        if((greater % num1 === 0) && (greater % num2 === 0)){
            lcm = greater;
            break;
        }
        greater += 1;
    }
    return lcm
}

console.log(findLCM(num1, num2))