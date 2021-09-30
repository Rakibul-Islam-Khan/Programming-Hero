// promise --> produce code --> we do something

function user() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => dataUser(json))
}
function dataUser(users) {
    // console.log(json);
    const user = document.getElementById('user');
    for (const data of users) {
        // console.log(data.name);
        const li = document.createElement('li');
        li.innerText = data.email;
        user.appendChild(li);
    }
}
function comments() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => commentsData(data))
}
function commentsData(comment) {
    for (const single of comment) {
        console.log(single.id);
    }
}



function posts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => postsData(data))
}

function postsData(datas) {
    const posts = document.getElementById('post');
    for (const data of datas) {
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
        <div>
            <h2>${data.title}</h2>
            <p>${data.body}</p>
        </div>
        `
        posts.appendChild(div);
    }
}




function album() {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(data => albumData(data))
}
function albumData(data) {
    for (const single of data) {
        console.log(single);
    }
}



function photos() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => photosData(data))
}
function photosData(data) {
    for (const single of data) {
        console.log(single);
    }
}



function todo() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => photosData(data))
}
function todoData(data) {
    for (const single of data) {
        console.log(single);
    }
}