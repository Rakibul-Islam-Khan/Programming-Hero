const art = document.getElementById('art');
const desc = document.getElementById('desc');
const price = document.getElementById('price');
const shipping = document.getElementById('shipping');
const totalPrice = document.getElementById('total');
function text(productPrice) {
    desc.innerText = `Lorem ipsum dolor sit amet consectetur, adipisicing elit.Rerum beatae laboriosam, commodi quis tempore necessitatibus.Voluptatibus minima aut non doloremque ?`
    price.innerText = `${productPrice}$`;
    total();
}
function total() {
    const productPrice = parseInt(price.innerText);
    const shippingPrice = parseInt(shipping.innerText);
    totalPrice.innerText = productPrice + shippingPrice;
}
document.getElementById('first').addEventListener('click', function () {
    art.src = 'images/1.jpg';
    text(650)
})
document.getElementById('second').addEventListener('click', function () {
    art.src = 'images/2.jpg';
    text(450)
})
document.getElementById('third').addEventListener('click', function () {
    art.src = 'images/3.jpg';
    text(350)
})
document.getElementById('free').addEventListener('click', function () {
    shipping.innerText = 5;
    total()
})
document.getElementById('express').addEventListener('click', function () {
    shipping.innerText = 30;
    total()
})