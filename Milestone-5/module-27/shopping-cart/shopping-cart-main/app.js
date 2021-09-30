// hide item
function hide(pack) {
  const cart = document.getElementById(pack + "-cart");
  cart.style.display = "none";
}

document.getElementById("phone-item").addEventListener("click", function () {
  hide("phone");
});
document.getElementById("case-item").addEventListener("click", function () {
  hide("case");
});

// price calculate
function updateNumber(isIncrease, product, price) {
  const input = document.getElementById(`${product}-input-number`);
  let inputNumber = input.value;
  if (isIncrease == true) {
    inputNumber = parseInt(inputNumber) + 1;
  } else {
    if (inputNumber > 0) {
      inputNumber = parseInt(inputNumber) - 1;
    }
  }
  input.value = inputNumber;
  const priceText = document.getElementById(`${product}-price`);
  priceText.innerText = inputNumber * price;
  totalPrice();
}
function totalPrice() {
  const phoneInput = document.getElementById("phone-input-number");
  const phoneNumber = parseInt(phoneInput.value);
  const phoneTotal = phoneNumber * 1219;

  const caseInput = document.getElementById("case-input-number");
  const caseNumber = parseInt(caseInput.value);
  const caseTotal = caseNumber * 59;

  const subtotal = phoneTotal + caseTotal;
  const tax = subtotal * 0.15;
  const total = subtotal + tax;
  document.getElementById("subtotal").innerText = subtotal;
  document.getElementById("tax").innerText = tax;
  document.getElementById("total").innerText = total;
}
document.getElementById("case-plus").addEventListener("click", function () {
  updateNumber(true, "case", 59);
});
document.getElementById("case-minus").addEventListener("click", function () {
  updateNumber(false, "case", 59);
});
document.getElementById("phone-plus").addEventListener("click", function () {
  updateNumber(true, "phone", 1219);
});
document.getElementById("phone-minus").addEventListener("click", function () {
  updateNumber(false, "phone", 1219);
});
