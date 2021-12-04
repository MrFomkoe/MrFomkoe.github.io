// defines hours
let hours = 0;
// defines minutes
let minutes = 0;
// defines seconds
let seconds = 0;
let startCount;
let timer;

// this function starts the stopwatch
function startTimer(){
    startCount = setInterval(count, 1000);
}

// this function stops the stopwathc
function stopTimer(){
    clearInterval(startCount);
}

// function that counts time
function count(){
    // adds minutes to stopwatch
    if (seconds == 60){
        seconds = 0;
        minutes++;
    }
    // adds hours to stopwatch
    if (minutes == 60){
        minutes = 0;
        hours++;
    }
    // each iteration of the stopwatch this adds 1 second
    seconds++;

    if (hours == 0 && minutes == 0){
        timer = `${seconds} seconds`;
    } else if (hours == 0){
        timer = `${minutes} minutes and ${seconds} seconds`;        
    } else {
        timer = `${hours} hours, ${minutes} minutes and ${seconds} seconds`;
    }

    // hours = `${hours}`.padStart(2, '0');
    // minutes = `${minutes}`.padStart(2, '0');
    // seconds = `${seconds}`.padStart(2, '0');

    console.log(timer);
}