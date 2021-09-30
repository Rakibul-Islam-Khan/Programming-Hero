// using object literal
const movie = { name: "Black Widow", gender: 'female', picture: 'sony' };
// console.log(movie);

// constructor type object
const newMovie = new Object();
// console.log(newMovie);

// create type object
const animateMovie = Object.create(null);
// console.log(animateMovie);

// class type object this syntactic sugar
class human{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const people = new human('smith', 50);
// console.log(people);

// function object
function student(name) {
    this.name = name;
}
const man = new student('jhon');
console.log(man);