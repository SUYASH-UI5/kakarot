str = 'MigaTte NO gOkUI'
// function to convert uppper letter into lower and vice-versa
const letterConvert = (str) => {
    strConvert = "";
    for(let i = 0; i < str.length; i++){
        if(str[i] === str[i].toLowerCase())
            strConvert += str[i].toUpperCase()
        else
            strConvert += str[i].toLowerCase()
    }
    return strConvert
}

console.log(letterConvert(str))