// JSON = JavaScript Object Notation
const user = { id: 1, name: "smith", eamil: 'smith@gmail.com' };
const userStringify = JSON.stringify(user);
console.log(userStringify);  //object convert to json
const userParse = JSON.parse(userStringify); // json convert to object
console.log(userParse);