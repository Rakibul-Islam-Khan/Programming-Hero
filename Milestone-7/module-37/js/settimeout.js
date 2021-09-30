// setTimeout working asynchronous way 
console.log("first in first out");
console.log("first in last out");
setTimeout(() => {
    console.log('fifo');
}, 10000);
console.log('last in last out');
console.log('last in first out');