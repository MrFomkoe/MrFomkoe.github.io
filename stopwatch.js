let hours = 0;
let minutes = 0;
let seconds = 0;
let startCount;
let timer;

function startTimer(){
    startCount = setInterval(count, 1000);
}

function stopTimer(){
    clearInterval(startCount);
}

function count(){
    if (seconds == 60){
        seconds = 0;
        minutes++;
    }
    if (minutes == 60){
        minutes = 0;
        hours++;
    }
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