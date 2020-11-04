// Program to perform Credit Card Number Validation
let cardNumber = '5689761002983498'
console.log(cardNumber.toString().split("").length);
cardNumberInt = []
for(let i = 0; i < cardNumber.toString().split("").length; i++){
    cardNumberInt.push(parseInt(cardNumber.toString().split("")[i]));
}
console.log(cardNumberInt);

// function to return sum of all digits of card number
const cardNumberSum = (cardNumberInt) =>{
    sum  = 0;
    for(let i = 0; i < cardNumberInt.length; i++){  
        sum = sum + cardNumberInt[i];
    }
    return sum;
}


// function to make sure the card number consists of only integers 
const isCarddigitString = (cardNumberInt) => {
    for(let i = 0; i < cardNumberInt.length; i++){
        if(typeof cardNumberInt[i] === "string" || isNaN(cardNumberInt[i]))
            return false;
    }
    return true;
}

// function to check last digit of the card number
const isLastDigitEven = (cardNumberInt) =>{
    if(cardNumberInt[cardNumberInt.length - 1] % 2 !== 0)
        return false;
    else
        return true;
}

// function to check all card number digits are equal
const allEqual = (cardNumberInt) => cardNumberInt.every(val => val === cardNumberInt[0])


// main function to check all validations
const validateCard = (cardNumberInt) =>{
    if(cardNumberInt.length < 16 || cardNumberInt.length > 16){
        console.log("Card Number is Not of 16 digits ");
        return false;
    }
        
    else if(cardNumberSum(cardNumberInt) < 16){
        console.log("Sum of all card Number digits is less than 16 ");
        return false;
    }
        
    else if(isCarddigitString(cardNumberInt) === false){
        console.log("The Card Number type is invalid ")
        return false;
    }

    else if(isLastDigitEven(cardNumberInt) === false){
        console.log("Last Digit of card number is not even ")
        return false;
    }
    
    else if(allEqual(cardNumberInt) === true){
        console.log("Card Number has only 1 number in all places ")
        return false;
    }
    else{
        console.log("Card Number is Valid");
        return true;
    }    
        
}

console.log(validateCard(cardNumberInt));
// const cardNumberSum = (cardNumber) =>{
//     let sum = 0
//     for(let i = 0; i < cardNumber.)
// }

// const validateCard = (cardNumber) =>{
//     cardNumber = cardNumber.toString().split("");
//     sum = 0;   
//     for(let i = 0 ; i < cardNumber.length; i++){
//         if((cardNumber.length < 16) || (cardNumber.length > 16))
//             return false;
        
//         // CardNumber must not be a string type
//         if(parseInt(cardNumber[i]) !== [0-9])
//             return false;
            
//         // Last digit of card number must be even
//         if(parseInt(cardNumber[cardNumber.length - 1]) % 2 !== 0)
//             return false;
            
//         // Sum of all digits of card must be greater than 16
//         // if(cardNumber.array.forEach(element => {
//         //     sum = sum + element;    
//         // }) < 16)
//         //     return false;
            
//         // Card number should not consists of one number only
//         //  if(cardNumber.forEach(element => {
//         //     element === element
//         // }))
//         //     return false;
//     }
//     return true;
// }
// console.log(validateCard(cardNumber))