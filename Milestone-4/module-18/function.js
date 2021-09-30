//simple function create Low level
// function firstFunction() {
//     console.log("My first function");
// }
// function call
// firstFunction();

// Medium Level Function
    // function addTwoNumber(number1,number2) {
    //     console.log("first number is:", number1,"second number is:", number2);
    //     var add = number1 + number2;
    //     console.log("The result is =", add);
    // }
    // addTwoNumber(56,59);

// Hard level function
    // function addTwoNumber(number1, number2) {
    //     console.log("first number is:", number1, "second number is:", number2);
    //     var add = number1 + number2;
    //     return add;
    // }
    // var firstNumber = 89;
    // var secondNumber = 205;
    // var add = addTwoNumber(firstNumber, secondNumber);
    // console.log("The result is =", add);

// create a object
// var phone = {
//     phoneName:"honor-8-lite", 
//     storage:"16gbRom", 
//     color:"blue",
//     price:17500,
//     brand:"Huawei",
//     ram:"3gb"
// }
// console.log(phone);
// // object value change first method
// phone.price = 18500;
// console.log(phone);
// // object value change second method
// phone["ram"] = "4GB";// variable name["property/key"] = "new value";
// console.log(phone);
// object value change third method
// var rom = "storage";// variable declare = "property";
// phone[rom] = "32GB"//variable name[varName] = "value";
// console.log(phone);

// switch case or break
// switch color example
    // var color = "red";
    // switch (color) {
    //     case "yellow":
    //         console.log("yellow");
    //         break;
    //     case "blue":
    //         console.log("blue");
    //         break;
    //     case "green":
    //         console.log("green");
    //         break;
    //     case "red":
    //         console.log("red");
    //         break;
    //     default:
    //         console.log("no-color");
    //         break;
    // }
// fruit example
    // var fruit = "lichi";
    // switch (fruit) {
    //   case "jackfruit":
    //   case "lichi":
    //     console.log("lichi or jackfruit here!!!");
    //     break;
    //   case "oranges":
    //     console.log("oranges");
    //     break;
    //   case "papayas":
    //     console.log("papayas");
    //     break;
    //   case "strawberry":
    //     console.log("strawberry");
    //     break;
    //   case "mangoes":
    //     console.log("mangoes");
    //     break;
    //   default:
    //     console.log("this is not here!");
    //     break;
    // }

// odd number
    // var oddNumber = [1, 3, 5, 7, 9]
    // switch (oddNumber[2]) {
    //     case 1:
    //         console.log("1");
    //         break 
    //     case 3:
    //         console.log("3");
    //         break 
    //     case 5:
    //         console.log("5");
    //         break 
    //     case 7:
    //         console.log("7");
    //         break 
    //     case 9:
    //         console.log("9");
    //         break 
    //     default:
    //         console.log("sorry!!!");
    //         break
    // }

// break and continue
var num = 0;
    while (num <= 100) {
        if (num >= 50) {
            break
        }
        console.log(num);
        num += 2;
    } 

// while (num < 10) {
//     if (num > 5) {
//       continue;
//     }
//     num++;
//     console.log(num);
// }
