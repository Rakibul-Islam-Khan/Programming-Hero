// NaN = Not a Number
/* 
fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89
3th = 2th + 1th
4th = 3th + 2th
5th = 4th + 3th
6th = 5th + 4th
nth = (nth - 1) + (nth -2) 
*/

// simple method
/* const fibonacci = [0, 1];
for (let i = 2; i <=15; i++) {
    // ith = (ith -1) + (ith - 2)
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];// start fibonacci[2] = fibonacci[2-1] + fibonacci[2-2];
}
console.log(fibonacci); */

// function method
/* function fibo(fiboArray) {
    for (let i = 2; i <= 15; i++) {
        fiboArray[i] = fiboArray[i - 1] + fiboArray[i - 2];
    }
    return fiboArray;
}
let fiboArray = [0, 1];
let fibonacci = fibo(fiboArray);
console.log(fibonacci); */

/* function fibo(fiboNum) {
    if (typeof fiboNum != "number") {
        return "the number is not valid"
    }
    else if(fiboNum < 2){
        return "enter a positive number greater than 1"
    }
    const fibonacciSeries = [0, 1];
    for (let i = 2; i <= fiboNum; i++) {
      fibonacciSeries[i] = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
    }
    return fibonacciSeries;
}
const fiboNum  = 8;
const fibonacci = fibo(fiboNum)
console.log(fibonacci); */

// recursive method
/* function fibonacci(fiboNum) {
    if (fiboNum == 0) {
        return 0;
    }else if(fiboNum == 1){
        return 1;
    }
    return fibonacci(fiboNum -1) + fibonacci(fiboNum -2)
}
let fiboNum = 6;
let fiboAllNum = fibonacci(fiboNum);
console.log(fiboAllNum); */

/* function fibonacci(fiboNum) {
  if (fiboNum == 0) {
    return [0];
  } else if (fiboNum == 1) {
    return [0, 1];
  }
  let fibonacciSeries = fibonacci(fiboNum - 1);
  fibonacciSeries[fiboNum] = fibonacciSeries[fiboNum - 1] + fibonacciSeries[fiboNum - 2];
  return fibonacciSeries;
}
let fiboNum = parseInt(Math.random() * 20);
let fiboAllNum = fibonacci(fiboNum);
console.log(`${fiboNum} fibonacci series is = [${fiboAllNum}]`); */


// math random or round
    // let random = Math.random() * i;
    // let rounded = Math.round(random);
    // console.log(rounded);
/* for (let i = 1; i <= 6; i++) {
    let random = Math.random(1) * 6;
    let rounded = Math.round(random);
    console.log(rounded);
} */

// swap number
/* let num1 = 6;
let num2 = 9;
console.log(num1,num2);

let swapNum = num1;
num1 = num2;
num2 = swapNum;
console.log(num1,num2);
// swap string
let str1 = "hello";
let str2 = "world";
console.log(str1,str2);

let swapStr = str1;
str1 = str2;
str2 = swapStr;
console.log(str1,str2);
// swap boolean
let bool1 = true;//bool1 store true value
let bool2 = false;// bool2 store false value
console.log(bool1,bool2);

let swapBool = bool1;// swapBool store true value
bool1 = bool2;// bool1 store false value
bool2 = swapBool;// bool2 store true value
console.log(bool1,bool2); */

// find three of largest number
/* function largestNumber(firstNum,secondNum,thirdNum) {
    if (firstNum > secondNum && firstNum > thirdNum) {
        console.log(`First number is bigger & the number is ${firstNum}`);
    } else if(secondNum > thirdNum && secondNum > firstNum) {
        console.log(`Second number is bigger & the number is ${secondNum}`);
    }else{
        console.log(`Third number is bigger & the number is ${thirdNum}`);
    }
}
let firstNum = parseInt(Math.random() * 20);
let secondNum = parseInt(Math.random() * 20);
let thirdNum = parseInt(Math.random() * 20);
largestNumber(firstNum,secondNum,thirdNum); */

// max num
// let num1 = 24;
// let num2 = 28;
// let max = Math.max(num1,num2);
// console.log(max);
// min num
// let num1 = parseInt(Math.random() * 20);
// let num2 = parseInt(Math.random() * 20);
// let min = Math.min(num1, num2);
// console.log(min);
// let num3 = parseInt(Math.random() * 20);
 /*    if (Math.max(num1, num2, num3) == num1) {
      console.log("first number is bigger", num1);
    } else if (Math.max(num1, num2, num3) == num2) {
      console.log("second number is bigger", num2);
    } else {
      console.log("third number is bigger", num3);
    } */
/* for (let i = 5; i <= 20; i++) {
    let num1 = parseInt(Math.random() * 20);
    let num2 = parseInt(Math.random() * 20);
    let num3 = parseInt(Math.random() * 10);
    if (Math.max(num1,num2,num3) == i) {
    console.log("first number is bigger", num1, "i=", i);
    } else if (Math.max(num1, num2, num3) == i) {
        console.log("second number is bigger", num2, "i=", i);
    }
    else{
        console.log("third number is bigger", num3,"i=",i);
    }
} */

// odd array push
/* let numArrayOdd = [];
for (let i = 1; i <= 100; i+=2){
    numArrayOdd.push(i);
}
console.log(numArrayOdd);
// even array push
let numArrayEven = [];
for (let i = 2; i <= 100; i += 2) {
  numArrayEven.push(i);
}
console.log(numArrayEven); */

/* let numArrayOdd = [];
let numArrayEven = [];
for (let i = 1; i <= 100; i++) {
    if(i % 2 == 0){
        numArrayOdd.push(i);
    }
    else{
        numArrayEven.push(i);
    }
}
console.log(numArrayOdd);
console.log(numArrayEven); */

// vowel or consonant
/* const allLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let vowel = [];
let consonant = [];
for (let i = 0; i < allLetter.length; i++) {
    if (allLetter[i] == "A" || allLetter[i] == "E" || allLetter[i] == "I" || allLetter[i] == "O" || allLetter[i] == "U" ) {
        vowel.push(allLetter[i])
    } else {
        consonant.push(allLetter[i])
    }
}
console.log(vowel);
console.log(consonant); */

// function vowels or consonant
/* function allAlphabet(allLetters) {
    let vowel = [];
    let consonant = [];
    for (let i = 0; i < allLetters.length; i++) {
    if (allLetters[i] == "A" || allLetters[i] == "E" || allLetters[i] == "I" || allLetters[i] == "O" || allLetters[i] == "U" ) {
        vowel.push(allLetters[i]);
    } else {
        consonant.push(allLetters[i]);
    }
}
    console.log(vowel);
    console.log(consonant);
}
const allLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
allAlphabet(allLetters); */

// Sum of all numbers in an array
// const sumArrayNumber = [25, 60, 85, 98, 55, 55, 48, 36, 84, 35, 28];
/* let sum = 0;
for (let i = 0; i < sumArrayNumber.length; i++) {
    let element = sumArrayNumber[i];
    sum += element;
}
console.log(`Total number is= ${sum}`); */

// Find the largest element of an array
// const sumArrayNumber = [25, 60, 85, 98, 55, 55, 48, 36, 84, 35, 28, -96, -85, -56];
// let numbers = largeElement(sumArrayNumber);
// console.log(numbers);
// function largeElement(num) {
//     let large = sumArrayNumber[0];
//     for (let i = 0; i < num.length; i++) {
//         let element = sumArrayNumber[i];
//         if (element > large) {
//             large = element;
//         }
//     }
//      return large;
// }

// find the lowest number of array
/* function largeElement(num) {
  let large = sumArrayNumber[0];
  for (let i = 0; i < num.length; i++) {
    let element = sumArrayNumber[i];
    if (element < large) {
      large = element;
    }
  }
  return large;
}
const sumArrayNumber = [25, 60, 85, 98, 55, 55, 48, 36, 84, 35, 28];
let numbers = largeElement(sumArrayNumber);
console.log(numbers); */

// duplicate found
// let empty = [];
// for (let i = 0; i <= 10; i++){
//     const random = Math.random() * 20;
//     const pick = Math.round(random);
//     if (empty.indexOf(pick) == -1) {
//         empty.push(pick);
//     } else {
//         console.log(empty,pick);
//     }
// }
// console.log(empty);
