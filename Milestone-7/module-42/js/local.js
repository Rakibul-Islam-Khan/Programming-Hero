const email = document.getElementById('email');
const password = document.getElementById('password');
const submit = document.getElementById('submit');
const login = document.getElementById('login');
let obj;
submit.addEventListener('click', function () {
    if (!email.value == '' && !password.value == '') {
        obj = { email: email.value, password: password.value }
        localStorage.setItem("userInfo", JSON.stringify(obj));
    };
    email.value = '';
    password.value = '';
});
login.addEventListener('click', function () {
    const local = JSON.parse(localStorage.getItem('userInfo'));
    if (local.email === email.value && local.password === password.value) {
        alert('correct email or password')
    } else {
        alert('incorrect email or password')
    };
     email.value = '';
     password.value = '';
})