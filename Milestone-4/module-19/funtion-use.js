// feet To inches
// function feetToInches(inches) {
//   var inches = feet * 12;
//   return inches;
// }
// var feet = 3;
// var inches = feetToInches(feet);
// console.log(feet, "feet to", inches,"inches");

// feet to centimeter
// function feetToCentimeter(feet) {
//     var centimeter = feet * 30.48;
//     return centimeter;
// }
// var feet = 5.8;
// var centimeter = feetToCentimeter(feet);
// console.log(feet, "feet to", centimeter,"centimeter");

// miles to kilometer

// leap year
// var num = 2016;

// // prime Number
    function isPrime(isNumber) {
    // Corner case
    if (isNumber <= 1) {
        return `the number is near 1`;
    }
    // Check from 2 to n-1
    for (let i = 2; i < isNumber; i++) {
        if (isNumber % i == 0) {
        return `the number is not prime ${isNumber}`;
        }
    }
    return `the number is prime ${isNumber}`;
    }
    var isNumber = parseInt(Math.random()*100);
    var number = isPrime(isNumber);
    console.log(number);

// factorial while loop
// var num = 6;
// var i = 1;
// var fact = 1;
// while (i<=num) {
//     var fact = fact * i;
//     i++
// }
// console.log(fact);

// factorial for loop
// var numOne =7;
// var factOne = 1;
// for (var i = 1; i <= numOne; i++) {
//     var factOne = factOne * i;

// }
// console.log(factOne);

// grade find
// function grade(num) {
//     if (num >= 80 && num <= 100) {
//       console.log("You have got A+ grade" + " Your number is =", num);
//     } else if (num >= 70 && num <= 79) {
//       console.log("You have got A grade" + " Your number is =", num);
//     } else if (num >= 60 && num <= 69) {
//       console.log("You have got A- grade" + " Your number is =", num);
//     } else if (num >= 50 && num <= 59) {
//       console.log("You have got B grade" + " Your number is =", num);
//     } else if (num >= 40 && num <= 49) {
//       console.log("You have got C grade" + " Your number is =", num);
//     } else if (num >= 33 && num <= 39) {
//       console.log("You have got D grade" + " Your number is =", num);
//     } else {
//       console.log("fail!!!", num);
//     }
//     return num;
// }
// var num = parseInt(Math.random() * 100);
// var grade =  grade(num);
// console.log(grade);

// simple interest formula I =P*r*t
// function interest(money,rateYear,time) {
//     var I = money * rateYear * time;
//     return I;
// }
// var money = parseInt(Math.random() * 10000);
// var rateYear = parseFloat(Math.random() * 100) / 100;
// var time = parseInt(Math.random() * 10);
// var interestFormula = parseInt(interest(money,rateYear,time));
// console.log(`Your have $${money} money`);
// console.log(`Your ${time} years interest is`,`$${interestFormula}`);

// while factorial function
// function fact(num) {
//     let i = 1;
//     let fact = 1;
//     while (i <= num) {
//         fact = fact * i;
//         i++;
//     }
//     return fact;
// }
// let num = 5;
// let numFact = fact(num);
// console.log(`${num}! = ${numFact}`);

// for factorial function
// function fact(num) {
//     let fact = 1;
//     for (let i = 1; i <= num; i++) {
//         fact = fact * i ;
//     }
//     return fact;
// }
// let num = parseInt(Math.random() * 20);
// let numFact = fact(num);
// console.log(`${num}! = ${numFact}`);
/*
1! = 1
2! = 2 * 1
3! = 3 * 2 * 1
4! = 4 * 3 * 2 * 1
5! = 5 * 4 * 3 * 2 * 1
factorial formula =====> n! = n * (n-1)!
5 * fact(5-1)/fact(4)
    4 * fact(4-1)/fact(3)
        3 * fact(3-1)/fact(2)
            2 * fact(2-1)/fact(1)
                1



*/
// recursive function factorial
    // function fact(num) {
    //     if (num == 1) {
    //         return 1;
    //     }
    //     return num * fact(num-1);
    // }
    // let num = parseInt(Math.random() * 20);
    // let numFact = fact(num);
    // console.log(`${num}! = ${numFact}`);

// all number sum
// var n = 50;
// var sumFormula = (n * (n+1)) / 2;
// console.log(sumFormula);