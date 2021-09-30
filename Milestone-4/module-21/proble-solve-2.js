// Remove duplicate items from an array
/* const menNames = ["mike", "john", "harry", "parker", "smith", "mike", "harry", "silvia", "Gates", "john"];
function duplicateRemove(menNames) {
    const uniqueName = [];
    for (const name of menNames) {
        if (uniqueName.indexOf(name) == -1){
            uniqueName.push(name);
        }
    }
    return uniqueName;
}
let namesArray = duplicateRemove(menNames);
console.log(`All mens name= ${menNames}`);
console.log(`Single men name= ${namesArray}`); */

/* const allNumbers = [20, 60, 80, 58, 78, 24, 55, 20, 69, 45, 45, 85, 60, 24, 47];
function duplicateNumber(allNumbers){
    const uniqueNumber = [];
    for (const number of allNumbers) {
        if (uniqueNumber.indexOf(number) == -1) {
            uniqueNumber.push(number);
        }
    }
    return uniqueNumber;
}
let numbers = duplicateNumber(allNumbers);
console.log(`All Number= ${allNumbers}`);
console.log(`Single Number= ${numbers}`); */

// Find the cheapest phone from an array of phone objects

/* const phones = [
  {
    brand: "Samsung Galaxy A22",
    storage: "64GB",
    camera: "48MP",
    ram: "4GB",
    price: 30000
  },
  {
    brand: "Huawei P20 Pro",
    storage: "64GB",
    camera: "48MP",
    ram: "6GB",
    price: 60000
  },
  {
    brand: "HTC Desire 21 Pro 5G",
    storage: "32GB",
    camera: "48MP",
    ram: "4GB",
    price: 35000
  },
  {
    brand: "OPPO Reno5",
    storage: "32GB",
    camera: "48MP",
    ram: "4GB",
    price: 45000
  },
  {
    brand: "iPhone 11 Pro",
    storage: "128GB",
    camera: "48MP",
    ram: "8GB",
    price: 90000
  },
  {
    brand: "HONOR-View30-PRO-06",
    storage: "64GB",
    camera: "48MP",
    ram: "3GB",
    price: 55000
  }
];
let highestBudget = phones[0];
for (const phone of phones) {
    if (phone.price > highestBudget.price) {
        highestBudget = phone;
    }
}
console.log("Highest budget phone ",highestBudget); */


/* function busCost(miles) {
  if (miles <= 250) {
    first250MilesCost = parseInt(miles * parseFloat(2.5));
    return first250MilesCost;
  } else if (miles <= 500) {
    let second500MilesCost = parseInt(250 * parseFloat(2.5));
    let scondMiles = miles - 250;
    let secondTotalCost = scondMiles * 4;
    const totalCost = second500MilesCost + secondTotalCost;
    return totalCost;
  }
  else {
    let second500MilesCost = parseInt(250 * parseFloat(2.5));
    let third1000MilesCost = 250 * 4;
    let thirdMiles = miles - 500;
    let thirdTotalCost = thirdMiles * 6;
    const totalCost2 = second500MilesCost + third1000MilesCost + thirdTotalCost;
    return totalCost2;
  }
}
let miles = 269;
const totalCost = busCost(miles);
console.log(totalCost); */



const allNumbers = [20, 60, 80, 58, 78, 24, 55, 20, 69, 45, 45, 85, 60, 24, 47];
let number = 0;
for (let i = 0; i < allNumbers.length; i++) {
  number +=  allNumbers[i];  
}
console.log(number);


