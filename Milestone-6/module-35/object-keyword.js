// object{key: value, key2: value2}
const movie = {
    name: "Black Widow",
    gender: 'female',
    picture: 'sony'
};
const keys = Object.keys(movie);// keys function give me object all key/properties
const values = Object.values(movie);// values function give me object all value
const keysOrValues = Object.entries(movie);// entries function give me keys or values pair in two dimensional array(2D)
// console.log(keys);
// console.log(values);
// console.log(keysOrValues);
Object.seal(movie);// seal function don't delete & add any property but change property
Object.freeze(movie);// freeze function don't change any property
movie.picture = 'SONY';
delete movie.gender;
console.log(movie);