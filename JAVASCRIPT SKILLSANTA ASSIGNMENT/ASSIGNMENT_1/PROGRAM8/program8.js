let n = 8

// function to print fibonacci series
const fibonacciSeries = (n) =>{
    let num1 = 0
    let num2 = 1
    let sum;
    console.log(num1)
    console.log(num2)
    for(let i = 0; i < n; i++){
        sum = num1 + num2
        num1 = num2
        num2 = sum
        console.log(num2)
    }
    return num2
}

console.log(fibonacciSeries(n))

