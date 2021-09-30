// for of loop use for array
const array = [2, 6, 8, 'local', 9, 'boys'];
for (const element of array) {
    // console.log(element);
}
// simple loop for array
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    // console.log(element);
}

// for in loop use for object
const movie = {
    name: "Black Widow",
    gender: 'female',
    picture: 'sony',
    actorNumber: 10,
    totalBudget: "6M"
};
const keys = Object.keys(movie);
for (const element in movie) {
    // console.log(element, movie[element]);
}
// simple for loop for object
for (let i = 0; i < keys.length; i++) {
    const values = keys[i];
    // console.log(values, movie[values]);
}
// console.log(keys);
// object.entries() give me a array so write of loop not in
// advance
for (const [keys, values] of Object.entries(movie)) {
    console.log(keys, values);
}