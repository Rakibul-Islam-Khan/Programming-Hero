function bmi(weight, feet) {
    let meter = feet / 3.281;
    let bmiMachine = weight / meter ** 2;
    return bmiMachine;
}
let weight = parseInt("55kg");
let feet = parseFloat("5.8feet");
const result = bmi(weight, feet);
console.log(`Your BMI is ${result}`);
