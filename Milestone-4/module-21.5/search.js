let products = [
  { name: "pant", price: 1450 },
  { name: "samsung phone", price: 18000 },
  { name: "oppo phone", price: 13000 },
  { name: "iphone phone", price: 50000 },
  { name: "shirt", price: 1200 },
  { name: "htc phone", price: 30000 },
  { name: "vivo phone", price: 15000 },
  { name: "hp laptop", price: 45000 },
  { name: "dell laptop", price: 52000 },
  { name: "lenovo laptop", price: 55000 },
  { name: "asus laptop", price: 35000 },
  { name: "shoe", price: 1050 }
];
// function searchProduct(products, searchString) {
//     const matched = [];
//     for (const product of products) {
//       let nameOfProduct = product.name.indexOf(searchString);
//         if (nameOfProduct != -1) {
//             matched.push(product)
//         }
//     }
//     return matched;
// }
// let match = "shoe";
// const result = searchProduct(products, match);
// console.log(result);

// cheapest products find
function searchProduct(products, min) {
    const matched = [];
    for (const product of products) {
        if (product.price > min) {
            continue
        }
        matched.push(product);
    }
    return matched;
}
let min = 10000;
const result = searchProduct(products, min);
console.log(result);