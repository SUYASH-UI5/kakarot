str = 'aa bb cc dd ee aa aa'
searchStr = 'aa'
// function to search a word and print its occurence
const searchWord = (str, searchStr) => {
    wordCount = 0
    str = str.split(" ")
    console.log(str)
    for(let i = 0; i < str.length; i++){
        if(str[i] === searchStr)
            wordCount = wordCount + 1
    }
    return wordCount
}

console.log(searchStr + " was found " + searchWord(str, searchStr) + " times")