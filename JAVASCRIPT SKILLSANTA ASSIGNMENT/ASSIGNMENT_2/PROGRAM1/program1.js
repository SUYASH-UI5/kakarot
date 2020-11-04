function realtimeClock(){
    let rtClock = new Date();
    let hours = rtClock.getHours();
    let minutes = rtClock.getMinutes();
    let seconds = rtClock.getSeconds();

    // Add AM & PM System
    let AMPM = (hours < 12) ? "AM" : "PM"

    // convert hours component to 12-hour format
    hours = (hours > 12) ? hours - 12 : hours;

    // pad the hours, minutes & seconds with the leading zeroes
    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    // display the clock
    document.getElementById('clock').innerHTML = 
        hours + " : " + minutes + " : " + seconds + " " + AMPM;
    let t = setTimeout(realtimeClock, 500);
}