const cart = [
    { name: "Shirt", color: "white", quantity:parseInt( Math.random() * 10), price: 1480},
    { name: "Pants", color: "White", quantity: parseInt( Math.random() * 10), price: 1080},
    { name: "Shoes", color: "White", quantity: parseInt( Math.random() * 5), price: 1260},
    { name: "Beg", color: "Black", quantity: parseInt( Math.random() * 5), price: 1550}
]
function shop(cart) {
     let price = 0;
     let minOrder = 10000;
     let discount = 10 / 100;
    let discountPrice = 0;
     for (const product of cart) {
       totalProduct = product.price * product.quantity;
       price += totalProduct;
     }
     console.log(`Total price-----------------${price} tk`);
     if (price >= minOrder) {
       discountPrice = parseInt(price * discount);
       price -= discountPrice;
       console.log(`Discount price-------------${price} tk`);
       console.log(`you got discount----------${discountPrice} tk`);
     } else {
       console.log("If you want to get discount then purchases at least tk", minOrder);
    }
    return `you buy ${cart[0].quantity} shirt, ${cart[1].quantity} pants, ${cart[2].quantity} pair shoes, ${cart[3].quantity} beg`;
}
console.log(shop(cart));