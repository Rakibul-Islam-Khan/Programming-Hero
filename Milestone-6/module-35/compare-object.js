// compare object object is a non primitive data type
const obj1 = { a: 1, b: 2 };
const obj2 = { a: 1, b: 2 };
const obj3 = obj1;
// if (obj1 === obj3) {
//     console.log('those are same object');
// }
// else if (obj1 === obj2) {
//     console.log('those are same object');
// } else {
//     console.log('those are not same');
// }

// const one = JSON.stringify(obj1);
// const two = JSON.stringify(obj2);
// if (one === two) {
//     console.log('those are same object');
// } else {
//     console.log('those are not same');
// }

function object(obj1 , obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return 'those are not same';
    }
    for (const single in obj1) {
        if (obj1[single] !== obj2[single]) {
            return 'those are not same';
        }
    }
    return 'those are same';
}
const same = object(obj1, obj2);
console.log(same);