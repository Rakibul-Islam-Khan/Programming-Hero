// '' = string, "" = string2, ``=backtick sting3
// 1
const pi = 3.1416;
console.log(pi);
let address = 'Dhaka,BD';
address = 'Mirpur, Dhaka, BD';
console.log(address);
// 2.a
const myAddress = `My home address is ${address}. I know what is the value of pi ${pi}`;
console.log(myAddress);
// 2.b
const obj = { a: 5, b: 8, c: 9, x: 4, y: 7, z: 3 };
const objValue = `first property value is ${obj.a}, forth property value is ${obj.x}, last property value is ${obj.z} `;
console.log(objValue);

// 3
const five = num => num / 5;
console.log(five(80));

const mulOne = (num1, num2) => (num1 + 2) * (num2 + 2);
console.log(mulOne(5, 8));

const mulTwo = (num1, num2, num3) => num1 * num2 * num3;
console.log(mulTwo(3, 4, 7));

const mulThree = (num1, num2) => {
    const res = (num1 + 2) * (num2 + 2);
    return res;
}
console.log(mulThree(22, 35));

// 5
const array = [20, 65, 88, 25, 56, 68, 85];
const map = array.map(num => num * 5);
console.log(map);

// 6
const numbers = [2, 5, 8, 7, 25, 55, 22, 30, 4, 3, 9];
const filter = numbers.filter(num => num % 2 == 1);
console.log(filter);

// 7
const obj = [
    { name: 'PRA-LA-1', price: 18000 },
    { name: 'Bag', price: 1500 },
    { name: 'laptop', price: 58000 },
    { name: 'motorola', price: 5000 },
    { name: 'book', price: 700 }
];
const find = obj.find(obj => obj.price == 5000);
console.log(find);

// 8
const {a, z, c} = { a: 5, b: 8, c: 9, x: 4, y: 7, z: 3 };
console.log(a, z, c);

// 9
const array = [20, 65, 88, 25, 56, 68, 85];
const [, , three] = array;
console.log(three);

// 10
const three = (num1, num2, num3 = 7) => num1 + num2 + num3;
console.log(three(20, 5));