const id = (name) => {
    const nameId = document.getElementById(name);
    return nameId;
}
const ul = id('ul');
const input = id('input');
const btn = id('btn');
const order = id('order');
const showProduct = (product) => {
    const li = document.createElement('li');
    li.innerText = product;
    ul.appendChild(li);

}
btn.addEventListener('click', function () {
    if (input.value !== '') {
        showProduct(input.value);
        addProductToCart(input.value);
    }
    input.value = '';

})
order.addEventListener('click', function () {
    ul.textContent = '';
    localStorage.removeItem('Products Cart')
})



const getCart = () => {
    const cart = localStorage.getItem('Products Cart'); //যদি লোকাল স্টোরেজ এ থাকে তাহলে এমন দেখাবে "{\"bm\":1,\"nm\":1}" = stringify Version
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart); // "{\"bm\":1,\"nm\":1}" কনভার্ট করবে {bm: 1, nm: 1} parse version
    } else {
        cartObj = {};
    }
    return cartObj;
}
const addProductToCart = name => {
    const cart = getCart();
    if (cart[name]) {
        cart[name] += 1;
    } else {
        cart[name] = 1;
    }
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('Products Cart', cartStringified);
}
const showProducts = () => {
    const show = getCart();
    for (const product in show) {
        showProduct(product)
    }
}
showProducts();