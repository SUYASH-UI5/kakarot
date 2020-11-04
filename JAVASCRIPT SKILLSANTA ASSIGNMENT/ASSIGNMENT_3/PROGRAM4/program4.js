// Armstrong Number
const isArmstrong = (number, digitLength) => {
    sum = 0;
    temp = number;
    while(temp > 0){
        digit = temp % 10;
        sum = sum + digit ** digitLength;
        temp = parseInt(temp /10);
    }
    return sum === number;
}

let number = 371
console.log(isArmstrong(number, number.toString().split('').length));