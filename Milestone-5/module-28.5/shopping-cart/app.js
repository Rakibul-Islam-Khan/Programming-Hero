function updateNumber(productId, update, price) {
  const caseNumber = document.getElementById(`${productId}-number`);
  const caseInt = parseInt(caseNumber.value);
  if (update == true) {
    caseNumber.value = caseInt + 1;
  } else if (update == false) {
    if (caseNumber.value > 0) {
      caseNumber.value = caseInt - 1;
    }
  }
  const priceUpdate = document.getElementById(`${productId}-price`);
  priceUpdate.innerText = caseNumber.value * price;
  totalPrice();
}
function totalPrice() {
  const phoneValue = document.getElementById('phone-number');
  const phoneInt = parseInt(phoneValue.value);
  const phonePrice = phoneInt * 1219;

  const caseValue = document.getElementById('case-number');
  const caseInt = parseInt(caseValue.value);
  const casePrice = caseInt * 59;

  const subtotal = phonePrice + casePrice;
  const tax = subtotal * 0.05;
  const total = subtotal + tax; 
   document.getElementById("subtotal").innerText = subtotal;
   document.getElementById("tax").innerText = tax;
   document.getElementById("total").innerText = total;
}
// case plus quantity update number
document.getElementById('case-plus').addEventListener('click', function () {
  updateNumber('case', true, 59)

});
// case minus quantity update number
document.getElementById('case-minus').addEventListener('click', function () {
  updateNumber('case', false, 59)
});
// phone plus quantity update number
document.getElementById('phone-plus').addEventListener('click', function () {
  updateNumber('phone', true, 1219)
});
// phone minus quantity update number
document.getElementById('phone-minus').addEventListener('click', function () {
  updateNumber('phone', false, 1219)
});
// discount price

function discountTotal() {
    const couponValue = document.getElementById("coupon");
    const discountPrice = document.getElementById("discount");
  const coupon = "SUMMER21";
  
    if (couponValue.value == coupon) {
      discountPrice.innerText = 100;
    }
    couponValue.value = "";
}