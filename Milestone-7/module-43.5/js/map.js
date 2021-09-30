// map adventure
const animals = ['lion', 'tiger', 'duck', 'hen', 'monkey'];
const animalName = animals.map((animal) => animal);
console.log(animalName);

/* const persons = [
  {firstname : "Malcom", lastname: "Reynolds"},
  {firstname : "Kaylee", lastname: "Frye"},
  {firstname : "Jayne", lastname: "Cobb"}
];
const names = item =>  item.firstname;
console.log(persons.map(names)); */

const root = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100];
const newRoot = root.map(Math.sqrt);
console.log(newRoot);














/* let kvArray = [{ key: 1, value: 10 }, { key: 2, value: 20 }, { key: 3, value: 30 }];

let reformattedArray = kvArray.map(obj => {
    let rObj = {};
    rObj[obj.key] = obj.value;
    return rObj;
})
console.log(reformattedArray); */