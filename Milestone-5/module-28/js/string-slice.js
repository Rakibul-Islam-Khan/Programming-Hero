const anthem = "Amar sonar bangla ami tomay valo bashi tomar akash tomar batsh";
const words = anthem.split(' ');
// console.log(words);
const withoutT = anthem.split('t');
// console.log(withoutT);
const smallSlice = anthem.slice(8, 15);
// console.log(smallSlice);
const littleText = anthem.substring(8, 15);// substring or slice are same
// console.log(littleText);
const smallText = anthem.substr(8, 15);
// console.log(smallText);

const vowel = ['a', 'e', 'i', 'o', 'u'];
const constants = ['b', 'c', 'd', 'f', 'g'];
let add = vowel.concat(constants);
add = vowel.join(', ');
console.log(add);