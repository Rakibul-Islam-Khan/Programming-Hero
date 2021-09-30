document.getElementById("key-pad").addEventListener("click", function (event) {
  const input = document.getElementById("pin-input-two");
  const key = event.target.innerText;
  if (isNaN(key)) {
    if (key == "C") {
      input.value = "";
    } else if (key == "DEL") {
      input.value = input.value.slice(0, -1);
    }
  } else {
    const previousKey = input.value;
    const newKey = previousKey + key;
    input.value = newKey;
  }
});

function getPin() {
  // random number or letter 
  // let num = parseInt(Math.random() * 10000000000000);
  // console.log(num.toString(22).substr(2, 6).toUpperCase());
  const randomPin = Math.round(Math.random() * 100000);
  const pinText = randomPin + "";
  if (pinText.length == 5) {
    return randomPin;
  } else {
    return getPin();
  }
}
document.getElementById("pin").addEventListener("click", function () {
  const inputTwo = document.getElementById("pin-input");
  inputTwo.value = getPin();
});

document.getElementById("submit-btn").addEventListener("click", function () {
  const inputTwo = document.getElementById("pin-input-two").value;
  const input = document.getElementById("pin-input").value;
  const errorValue = document.getElementById("error");
  const successValue = document.getElementById("success");
  if (input > 0) {
    if (input == inputTwo) {
      successValue.style.display = "block";
      errorValue.style.display = "none";
    } else {
      errorValue.style.display = "block";
      successValue.style.display = "none";
    }
  }
});


document.getElementById("submit-btn").addEventListener('click', function () {
  const tryAgain = document.getElementById("try-left").innerText -= 1;
  const disabledBtn = document.getElementById("submit-btn");
  if (tryAgain == 0) {
    disabledBtn.setAttribute('disabled', false);
    disabledBtn.setAttribute('title',"pin didn't match reload required")
  }
})