const min = document.getElementById('min');
const sec = document.getElementById('sec');
const mil = document.getElementById('mil');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
let seconds = 00;
let minutes = 00;
let milSec = 00;
start.addEventListener('click', function () {
    const intervalMil = setInterval(() => {
        mil.innerText = milSec++;
        if (milSec === 100) {
            clearInterval(intervalMil);
        }
    }, 1);
    const intervalSec = setInterval(() => {
        sec.innerText = seconds++;
        if (seconds === 60) {
            clearInterval(intervalSec);
        }
    }, 1000);
})
stop.addEventListener('click', function () {
    
})