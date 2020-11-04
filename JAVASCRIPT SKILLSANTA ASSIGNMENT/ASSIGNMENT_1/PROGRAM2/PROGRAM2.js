const n = 26

// function for prime number check
const isPrime = (number) => {
    if (number == 2 || number == 3)
        return true 
    if (number == 0 || number == 1)
        return false
    for(let i = 2; i < number; i++){
        if(number % i == 0)
            return false
    }
    return true
}

// function for even number check
const isEven = (number) =>{
    if(number % 2 == 0)
        return true
    else
        return false
}


// function for odd number check
const isOdd = (number) =>{
    if(number % 2 == 0)
        return false
    else
        return true
}

// main code
for(let i = 0; i < n; i++){
    if(isOdd(i) && isPrime(i))
        console.log(i + " is Odd And Prime")
    else if(isEven(i) && isPrime(i))
        console.log(i + " is Even & Prime")
    else if(isOdd(i))
        console.log(i +" is Odd")
    else if(isEven(i))
        console.log(i + " is Even")
}