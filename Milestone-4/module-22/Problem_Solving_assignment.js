// seerToMon convert
function seerToMon(seer) {
    // if user input negative number or text
    if (seer < 0) {
        return "enter positive number negative number are not allow";
    }
    else if ( typeof seer != "number") {
        return "text are not allow";
    }
    // return a number of Mon
    const mon = seer / 40;
    return mon;
}
const seer = 7890;
const totalMon = seerToMon(seer);
console.log(totalMon);

// totalSales a shop
function totalSales(shirtQuantity, pantsQuantity, shoesQuantity) {
    // if user input negative number or text
    if (shirtQuantity < 0 || pantsQuantity < 0 || shoesQuantity < 0) {
        return "enter positive number negative number are not allow";
    }
    else if ( typeof shirtQuantity != "number" || typeof pantsQuantity != "number" || typeof shoesQuantity != "number") {
        return "text are not allow";
    }
    // return totalSales of this shop
    let shirt = 100;
    let pants = 200;
    let shoes = 500;
    const totalPrice = shirt * shirtQuantity + pants * pantsQuantity + shoes * shoesQuantity;
    return totalPrice;
}
let shirtQuantity = 20;
let pantsQuantity = 89;
let shoesQuantity = 10;
const total = totalSales(shirtQuantity, pantsQuantity, shoesQuantity);
console.log(total);

// deliveryCost
function deliveryCost(tshirtQuantity) {
         // if user input negative number or text
        if (tshirtQuantity < 0) {
          return "enter positive number negative number are not allow";
        } else if (typeof tshirtQuantity != "number") {
          return "text are not allow";
        }
    if (tshirtQuantity <= 100) {
        let tshirtFirst100DeliveryPrice = tshirtQuantity * 100;
        return tshirtFirst100DeliveryPrice;
    } else if (tshirtQuantity <= 200) {
        let tshirtSecond200DeliveryPrice = 100 * 100;
        let newTshirtPrice = tshirtQuantity - 100;
        let secondTotalTshirtPrice = newTshirtPrice * 80;
        let totalTshirtPrice = tshirtSecond200DeliveryPrice + secondTotalTshirtPrice;
        return totalTshirtPrice;
    }
    else {
        let tshirtSecond200DeliveryPrice = 100 * 100;
        let secondTotalTshirtPrice = 100 * 80; ;
        let newTshirtPrice = tshirtQuantity - 200;
        let tshirtThid300DeliveryPrice = newTshirtPrice * 50;
        let totalPrice = tshirtSecond200DeliveryPrice + secondTotalTshirtPrice + tshirtThid300DeliveryPrice;
        return totalPrice;
    }
    // return a number of totalPrice
}
let tshirtQuantity = 250;
const totalDeliveryPrice = deliveryCost(tshirtQuantity);
console.log(totalDeliveryPrice);


// perfectFriend find
function perfectFriend(friends) {
// if user input negative number or text
if (typeof friends != "object") {
return "enter at last one name";
}
// return first name of array
let firstFriend = [];
for (let i = 0; i < friends.length; i++) {
if (friends[i].length == 5 ) {
    firstFriend.push(friends[i]);
    break
}
}
return firstFriend;
}
let friends = ["Tamima", "Sakib", "Rakib", "Miraj", "Muzahid", "Salman", "Smith", "Mike"];
const totalFriends = perfectFriend(friends);
console.log(totalFriends);