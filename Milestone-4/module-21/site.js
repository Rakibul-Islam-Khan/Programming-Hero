/* মনে করো তুমি একটা ই-কমার্স ওয়েব সাইট বানাইছো। তোমার কাছে প্রডাক্টগুলো আছে  সেই প্রোডাক্টের ইন ফরমেশনগুলো (যেমনঃ প্রোডাক্টের নাম,  প্রোডাক্টের আইডি এবং স্টকে কি পরিমাণে প্রোডাক্ট আছে ) ডাটাবেজে object আকারে সেভ করে রেখেছ।

এখন তোমার কাজ হচ্ছে তুমি একটা ফাংশন লিখবা যেই ফাংশনের কাজ হচ্ছে সে ইনপুট আকারে প্রোডাক্টের নাম দিবে এবং সে ঐ object থেকে যে প্রোডাক্টের নাম ইনপুট হিসেবে নিয়েছে তর সব ইন ফরমেশন  Array আকারে রিটার্ন করবে। 
 */
/* let products = [
  { id: 1, name: "phone", stock: 30 },
  { id: 2, name: "microphone", stock: 20 },
  { id: 3, name: "shirt", stock: 40 },
  { id: 4, name: "laptop", stock: 50 },
  { id: 5, name: "soundbox", stock: 10 },
];
function productsName(products, searchText) {
  let match = [];
  for (const property of products) {
    let value = property.name;
    if (value == searchText) {
      match.push(property);
    }
  }
  return match;
}
let search = "microphone";
const result = productsName(products, search);
console.log(result); */


/* function productsName(products, searchText) {
  let match = [];
  for (let i = 0; i < products.length; i++) {
    for (let property in products) {
      let value = property[i];
      if (value == searchText) {
        match.push(property);
      }
    }
  }
  return match;
}
let search = "phone";
const result = productsName(products, search);
console.log(result); */


/* var products = [
  {
    productName: "Laptop",
    productId: 01,
    stock: 100,
  },
  {
    productName: "Microphone",
    productId: 02,
    stock: 10,
  },
  {
    productName: "Monitor",
    productId: 03,
    stock: 20,
  },
];

function product(productName) {
  const restProduct = [];
  for (let i = 0; i < products.length; i++) {
    const element = products[i];
    for (let value in element) {
      if (value == "productName" && element[value] != productName) {
        restProduct.push(element);
      }
    }
  }
  return restProduct;
}

console.log(product("Monitor")); */

// function giveMeSomething(a) {
//   let res ='something' + ' ' + a;
//     return `"${res}"`;
// }
// let text = "is better than nothing";
// console.log(giveMeSomething(text));

// var name =["Johny", "Bob", "Marry", "Anna", "Rose"];
// function perfectFriend(fa,name) {
//   let na = name[0].length;
//   if (na == fa.length){
//          return name[0];
//      }
//      else{
//          return "Type a friend name with five character"
//      }
// }
// let fa = 'jhony';
// newName = perfectFriend(fa,name);
// console.log(newName);



