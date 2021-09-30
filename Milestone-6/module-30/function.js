// Default parameter
// function add(num1, defaultParameter = anyDataTypeAllow ) {
//     const sum = num1 + num2;
//     return sum;
// }
// console.log(add(5,noAgrument));
function add(num1, num2 = 9) {
    const sum = num1 + num2;
    return sum;
}
console.log(add(5));
