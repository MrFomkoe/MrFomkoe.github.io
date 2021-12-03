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

    // hours = `${hours}`.padStart(2, '0');
    // minutes = `${minutes}`.padStart(2, '0');
    // seconds = `${seconds}`.padStart(2, '0');

    timer = `hours: ${hours}, minutes: ${minutes}, seconds: ${seconds}`;
    console.log(timer);
}