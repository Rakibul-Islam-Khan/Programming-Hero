const newBtn = document.getElementById('new');
const styleBtn = document.getElementById('style');
const main = document.getElementById('main');
const inputText = document.getElementById('input-text');
const submitBtn = document.getElementById('submit-btn');
// main.addEventListener('click', function (event) {
//     console.log(event.target.parentNode.childNodes);
//     // console.log(event.target.childNodes);

// })
// keyup, keypress, keydown
inputText.addEventListener('keyup', function () {
    if (inputText.value == 'hideMe') {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
})
submitBtn.addEventListener('click', function () {
    inputText.value = '';
    submitBtn.disabled = true;
})