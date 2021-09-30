// memory price
const memoryBtn1 = document.getElementById('memory-btn-8gb');
const memoryBtn2 = document.getElementById('memory-btn-16gb');
const memoryCost = document.getElementById('memory-cost');
// storage price
const storageBtn1 = document.getElementById('storage-btn-256gb');
const storageBtn2 = document.getElementById('storage-btn-512gb');
const storageBtn3 = document.getElementById('storage-btn-1tb');
const storageCost = document.getElementById('storage-cost');
// delivery price
const deliveryBtn1 = document.getElementById('primary-delivery');
const deliveryBtn2 = document.getElementById('secondary-delivery');
const deliveryCost = document.getElementById('delivery-cost');
// total price
const bestPrice = document.getElementById('best-price');
const totalPrice = document.getElementById('total-price');
// promo code discount price
const grandTotal = document.getElementById('grand-total');
const inputValue = document.getElementById('input-value');
const applyBtn = document.getElementById('button-addon2');

function total() {
    const bestPriceNumber = parseInt(bestPrice.innerText);
    const memoryCostNumber = parseInt(memoryCost.innerText);
    const storageCostNumber = parseInt(storageCost.innerText);
    const deliveryCostNumber = parseInt(deliveryCost.innerText);
    totalPrice.innerText = bestPriceNumber + memoryCostNumber + storageCostNumber + deliveryCostNumber;
    return grandTotal.innerText = bestPriceNumber + memoryCostNumber + storageCostNumber + deliveryCostNumber;
}
function promo() {
    const discount = total();
    if (inputValue.value == 'stevekaku') {
        grandTotal.innerText = discount - (discount * 0.20);
        applyBtn.disabled = true;
    }
    inputValue.value = '';
}
memoryBtn1.addEventListener('click', function () {
    memoryCost.innerText = 0;
    total()
})
memoryBtn2.addEventListener('click', function () {
    memoryCost.innerText = 180;
    total()
})
storageBtn1.addEventListener('click', function () {
    storageCost.innerText = 0;
    total()
})
storageBtn2.addEventListener('click', function () {
    storageCost.innerText = 100;
    total()
})
storageBtn3.addEventListener('click', function () {
    storageCost.innerText = 180;
    total()
})
deliveryBtn1.addEventListener('click', function () {
    deliveryCost.innerText = 0;
    total()
})
deliveryBtn2.addEventListener('click', function () {
    deliveryCost.innerText = 20;
    total()
})
applyBtn.addEventListener('click', function () {
    promo()
})
