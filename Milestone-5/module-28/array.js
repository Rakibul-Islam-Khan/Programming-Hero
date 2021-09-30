// function perfectFriend(friends) {
// // if user input negative number or text
// if (typeof friends != "object") {
// return "enter at last one name";
// }
// // return first name of array
// let firstFriend = [0];
//     for (const friend of friends) {
//     if (friend.length == 5) {
//         firstFriend = friend;
//         return firstFriend;
//     }
// }
// }
// let friends = ["Tamima", "Sakib", "Rakib", "Miraj", "Muzahid", "Salman", "Smith", "Mike"];
// const myBigBuddy = perfectFriend(friends);
// console.log(myBigBuddy);

function perfectFriend(friends) {
// if user input negative number or text
if (Array.isArray(friends) == false) {
return "enter at last one name";
}
// return first name of array
let firstFriend = friends[0];
    for (const friend of friends) {
    if (friend.length > firstFriend.length) {
        firstFriend = friend;
    }
    }
    return firstFriend;
}
let friends = ["Tamima", "Sakib", "Rakib", "Miraj", "Muzahid", "Salman", "Smith", "Mike"];
const myBigBuddy = perfectFriend(friends);
console.log(myBigBuddy);