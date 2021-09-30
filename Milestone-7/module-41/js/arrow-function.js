"use strict";
// function add(num1:number,num2:number):number {
//     const sum = num1 + num2;
//     return sum;
// }
// console.log(add(35, 24));
function empty(num1, num2) {
    const sum2 = num1 + num2;
    console.log(sum2);
}
empty(35, 24);
function anyType(num1, num2) {
    const sum = num1 + num2;
    return sum;
}
console.log(anyType(35, 24));
console.log(anyType("Smith", "john"));
