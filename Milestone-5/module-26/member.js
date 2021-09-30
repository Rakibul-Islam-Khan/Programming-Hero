/* // member html

// 1
document.getElementById("deposit-button").addEventListener("click", function () {
    // deposit enter money
    const depositInput = document.getElementById("deposit-input");
    const depositInputValue = parseFloat(depositInput.value);

    const moneySpan = document.getElementById("money-span");
    const moneySpanText = parseFloat(moneySpan.innerText);
    const moneySpanTotal = moneySpanText + depositInputValue;
    moneySpan.innerText = moneySpanTotal;

    // balance enter money
    const balanceSpan = document.getElementById("balance-span");
    const balanceSpanText = parseFloat(balanceSpan.innerText);
    const balanceSpanTotal = balanceSpanText + depositInputValue;
    balanceSpan.innerText = balanceSpanTotal;

    // clear input
        depositInput.value = "";
});

// 2
document.getElementById("withdraw-button").addEventListener('click', function () {
    const withdrawInput = document.getElementById("withdraw-input");
    const withdrawInputValue = parseFloat(withdrawInput.value);

    const withdrawSpan = document.getElementById("withdraw-span");
    const withdrawSpanText = parseFloat(withdrawSpan.innerText);
    const withdrawSpanTotal = withdrawInputValue + withdrawSpanText;
    withdrawSpan.innerText = withdrawSpanTotal;

    // balance
    const balanceText = document.getElementById("balance-span");
    const balanceTextTotal = parseFloat(balanceText.innerText);
    const withdrawTotal = balanceTextTotal - withdrawSpanTotal;
    balanceText.innerText = withdrawTotal;

    withdrawInput.value = '';
});
 */


function deposit(depositFunction,spanId){
    const moneySpan = document.getElementById(spanId);
    const moneySpanText = parseFloat(moneySpan.innerText);
    const moneySpanTotal = moneySpanText + depositFunction;
    moneySpan.innerText = moneySpanTotal;

}

function balance(depositFunction, spanId) {
  const balanceText = document.getElementById(spanId);
  const balanceTextTotal = parseFloat(balanceText.innerText);
  const withdrawTotal = balanceTextTotal - depositFunction;
  balanceText.innerText = withdrawTotal;
}

function inputValue(inputId) {
    const depositInput = document.getElementById(inputId);
    const depositInputValue = parseFloat(depositInput.value);
    depositInput.value = '';
    return depositInputValue;
}
document.getElementById("deposit-button").addEventListener("click", function () {
    const depositFunction = inputValue('deposit-input');
    if (depositFunction > 0) {
        balanceOrDeposit(depositFunction, "money-span");
        balanceOrDeposit(depositFunction, "balance-span");
    }
});

document.getElementById("withdraw-button").addEventListener("click", function () {
const depositFunction = inputValue("withdraw-input");
  if (depositFunction > 0) {
    balanceOrDeposit(depositFunction, "withdraw-span");
    balanceOrDeposit(depositFunction, "balance-span");
  }
});