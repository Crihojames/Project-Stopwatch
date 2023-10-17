const timerEl = document.getElementById('timer');
const startButtonEl = document.getElementById('start')
const stopButtonEl = document.getElementById('stop')
const resetButtonEl = document.getElementById('reset')

let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function startTimer(){
        startTime = Date.now() - elapsedTime

        timerInterval = setInterval(()=>{
            elapsedTime = Date.now() - startTime;
            timerEl.textContent = formatTime(elapsedTime);
        }, 10)
}

function formatTime(elapsedTime){
    const miliseconds = Math.floor((elapsedTime % 1000) / 10);
    return miliseconds;
}

function stopTimer(){
    console.log("stop");
}

function resetTimer(){
    console.log("reset");
}


startButtonEl.addEventListener("click", startTimer)
stopButtonEl.addEventListener("click", stopTimer)
resetButtonEl.addEventListener("click", resetTimer)