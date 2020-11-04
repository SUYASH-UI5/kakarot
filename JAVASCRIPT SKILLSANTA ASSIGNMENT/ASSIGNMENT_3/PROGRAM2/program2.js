// Program to find difference between 2 dates in terms of days
let date1 = new Date("04/02/2020");
let date2 = new Date("11/04/2020");
const dateDifference = (date1, date2) =>{
    let timeDifference = date2.getTime() - date1.getTime();
    let dayDifference = timeDifference / (1000 * 3600 * 24);
    return `${Math.floor(dayDifference)} Days`;
}

console.log(dateDifference(date1, date2));