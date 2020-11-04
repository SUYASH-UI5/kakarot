const arr = [23, 56, 23, 78, 46, 23, 'adc', 'gfs', 23]

// function to find out most frequent element
const mostFrequentElement = (arr) =>{
    let counts = {};  // to count ccurence of item here
    let compare = 0;   // compare using the stored values
    let mostFrequent;  // to store most frequent item

    for(let i = 0; i < arr.length; i++){
        let item = arr[i]
        if(counts[item] === undefined) //when count of that item does not exists
            counts[item] = 1
        else
            counts[item] = counts[item] + 1  //when count of that item exists
        
        if(counts[item] > compare){
            compare = counts[item]
            mostFrequent = arr[i]
        }

    }
    return `${mostFrequent} - ${counts[mostFrequent]} times`;
}

console.log(mostFrequentElement(arr))