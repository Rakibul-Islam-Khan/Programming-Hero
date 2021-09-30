//1.  write a three variable ( string, number, boolean)
/* let str = "hello world!";
console.log(str);
let number = 258;
console.log(number);
let boolean = true;
console.log(boolean); */

// 2 . two variable using (let, const)

// change variable is let
/* let one = 56;
one = "Universe";
console.log(one);

// not changeable is const
const pi = 3.1416;
console.log(pi); */

// 3. simple math (+, -, /, *, %,)
/* 
let num1 = 25;
let num2 = 65;
const result1 = num1 + num2;
console.log(result1);
let num3 = 85;
let num4 = 65;
const result2 = num3 - num4;
console.log(result2);
let num5 = 25;
let num6 = 65;
const result3 = num5 *  num6;
console.log(result3);
let num7 = 25;
let num8 = 65;
const result4 = num7 / num8;
console.log(result4);
let num9 = 25;
let num10 = 65;
const result5 = num9 % num10;
console.log(result5); */

// 4. comparison (>, <, ==, >=, <=, !=)
// let one1 = 50;
// let one2 = 89;
/* let compare = one1 > one2;
console.log(compare);

compare = one1 < one2;
console.log(compare);

compare = one1 <= one2;
console.log(compare);

compare = one1 >= one2;
console.log(compare);

compare = one1 == one2;
console.log(compare);

compare = one1 != one2;
console.log(compare); */ 

// 5. two condition
// compare = one1 < one2 && one1 != one2;
// console.log(compare);
// compare = one1 < one2 || one1 == one2;
// console.log(compare);

// 6. if else condition
// if (one1 == one2 || one1 < one2) {
//     console.log("big 1");
// } else {
//     console.log("big 2");
// }

// 7. 7 to 19 odd number find
/* let number = 7;
while (number <= 19) {
    console.log(number);
    number += 2;
} */

//8.  array declare
// let array = [80, 85, 98, 89, 92, 88, 108, 176, 178];
/* console.log(array.length);
array[7] = 64;
console.log(array);
array.push(99);
console.log(array);
array.pop();
console.log(array);
console.log(array.indexOf(88)); */

// 9. for loop declare
/* for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);
} */
// for (const element of array) {
//     console.log(element);
// }

// 10. bigger than 80 array
// let largest = array[0];
/* for (let i = 0; i < array.length; i++) {
    if (largest < array[i]) {
        largest = array[i];
    }
} */
// console.log(largest);
// for (let arr of array) {
//     if (arr > largest) {
//        largest = arr;
//     }
// }
// console.log(largest);

// 11. function with three number multiplication
// let one = 45;
// let two = 56;
// let three = 87;
// function multi(one, two, three) {
//     let result = one * two * three;
//     return result;
// }
// console.log(multi(one,two,three));

// 12. declare a object and change property
// let object = { id: 98872, name: "monir", roll: 56952, class: 10 };
// object.name = "mike smith";
// object.reg = 598547;
// console.log(object);

// 13. feetToInch
/* let feet = 5;
function feetToInch(feet) {
    const inch = feet * 12;
    return inch;
}
console.log(feetToInch(feet));

// 14. centimeterToMeter
let centimeter = 500;
function centimeterToMeter(centimeter) {
    const meter = centimeter /  100;
    return meter;
}
console.log(centimeterToMeter(centimeter));

// pageRequirement
function pageRequirement(firstBookQuantity, secondBookQuantity, thirdBookQuantity) {
    let book1 = 100;
    let book2 = 200;
    let book3 = 300;
    const totalPages = book1 * firstBookQuantity + book2 * secondBookQuantity + book3 * thirdBookQuantity;
    return totalPages
}
const firstBookQuantity = 6;
const secondBookQuantity = 2;
const thirdBookQuantity = 5;
const totalPagesOfBook = pageRequirement(firstBookQuantity, secondBookQuantity, thirdBookQuantity);
console.log(`Total book of page ${totalPagesOfBook}`); */

// find array small name
// let array = ['motin', 'kalu', 'li', 'monir', 'smith', 'harry potter', 'angelina', 'sakib', 'gayle'];
// function nameArray(array) {
//     let shortName = array[0];
//     /* for (let i = 0; i < array.length; i++) {
//         if (shortName.length > array[i].length) {
//             shortName = array[i];
//         }
//     } */
//     for (const arr of array) {
//         if (shortName.length > arr.length) {
//             shortName = arr;
//         }
//     }
//     return shortName;
// }
// const small = nameArray(array);
// console.log(small);

// odd or even find of array
let array = [20, 89, 5, 55, 26, 98, 99, 54, 35, 58, 67, 61, 72, 79, 44, 49, 11, 15];
function nameArray(array) {
    let oddNumber = array[0];
    let odd = [];
    let even = [];
/*     for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 1) {
            oddNumber = array[i];
            odd.push(array[i]);
        } else {
            oddNumber = array[i];
            even.push(array[i]);
        }
    } */
    for (const arr of array) {
        if (arr % 2 == 1) {
            oddNumber = arr;
            odd.push(arr);
        } else {
            oddNumber = arr;
            even.push(arr);
      }
    }
    // console.log(`this is even number [${even}]`);
    // console.log(`this is odd number [${odd}]`);
    let result = {
        odd,
        even
    }
    return result;
}
const evenOrOdd = nameArray(array);
console.log(evenOrOdd);

const cart = [
    { name: "Shirt", color: "white", quantity:parseInt( Math.random() * 10), price: 1480},
    { name: "Pants", color: "White", quantity: parseInt( Math.random() * 10), price: 1080},
    { name: "Shoes", color: "White", quantity: parseInt( Math.random() * 5), price: 1260},
    { name: "Beg", color: "Black", quantity: parseInt( Math.random() * 5), price: 1550}
]
let price = 0;
let minOrder = 10000;
let discount = 20 / 100;
let discountPrice = 0;
for (const product of cart) {
    totalProduct = product.price * product.quantity;
    price += totalProduct
}
console.log(`Total price= ${price}`);
if (price >= minOrder) {
    discountPrice = parseInt( price * discount);
    price -= discountPrice;
    console.log(`Discount price= ${price}`);
} else {
    console.log("If you want to get discount then purchases at least",minOrder);
}

