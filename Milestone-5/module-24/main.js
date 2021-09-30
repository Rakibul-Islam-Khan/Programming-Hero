// //method 1 most use this method
// function red() {
//   document.body.style.backgroundColor = "red";
// }
// //method 2
// const crim = document.getElementById("crimson");
// crim.onclick = crimson;
// function crimson() {
//   document.body.style.backgroundColor = "crimson";
// }
// //method 3 anonymous/callback function
// const orange = document.getElementById("orange");
// orange.onclick = function () {
//   document.body.style.backgroundColor = "orange";
// };
// //method 4
// const lightgreen = document.getElementById("lightgreen");
// lightgreen.addEventListener("click", light);
// function light() {
//   document.body.style.backgroundColor = "lightgreen";
// }
// //method 5
// const green = document.getElementById("green");
// green.addEventListener("click", function light() {
//   document.body.style.backgroundColor = "green";
// });
// //method 6 most use this method
// document.getElementById("blue").addEventListener("click", function light() {
//   document.body.style.backgroundColor = "blue";
// });

// document.getElementById("submit-btn").addEventListener("click", function () {
//   const inputFiled = document.getElementsByTagName("input")[0];
//   const inputFiled2 = document.getElementsByTagName("input")[1];
//   const p = document.getElementsByTagName("p")[0];
//   const p1 = document.getElementsByTagName("p")[1];
//   p.innerText = inputFiled.value;
//   inputFiled.value = "";
//   p1.innerText = inputFiled2.value;
//   inputFiled2.value = "";
// });

// document.getElementById("comment-change").addEventListener("click", function () {
//     const textChange = document.getElementById("comment");
//     const div = document.getElementsByTagName("div")[0];
//     const p = document.createElement("p");
//     p.innerText = textChange.value;
//     textChange.value = "";
//     div.appendChild(p);
// });

// document.getElementById("input-delete").addEventListener("keyup", function (event) {
//     if (event.target.value == "delete") {
//       document.getElementById("delete").removeAttribute("disabled");
//     } else {
//       document.getElementById("delete").setAttribute("disabled", true);
//     }
//     document.getElementById("delete").addEventListener("click", function () {
//       document.getElementsByTagName("p")[0].style.display = "none";
//     });
//   });

//event bubble
// document.getElementsByTagName("section")[0].addEventListener('click', function () {
//     const items = document.getElementById('items');
//     console.log(items)
// })
// document.getElementsByTagName("h1")[1].addEventListener('click', function (event) {
//     const sec = document.getElementsByTagName('section')[0];
//     console.log(sec)
//     event.stopImmediatePropagation(event.target)
// })
// document.getElementById("items").addEventListener('click', function () {
//     const item = document.getElementsByClassName('item');
//     console.log(item)
// })


// function vk() {
//     document.getElementsByTagName('img')[0].src = 'https://images.unsplash.com/photo-1546587348-d12660c30c50?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJhbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'
// }