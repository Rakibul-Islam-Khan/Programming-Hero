// let sec = 0;
// setInterval(() => {
//     sec++;
//     console.log(sec);
//     if (sec === 60) {
//         clearInterval();
//     }
// }, 1000);
let sec = 0;
const clock = setInterval(() => {
    sec++;
    console.log(sec);
    if (sec === 60) {
        clearInterval(clock);
    }
}, 1000);