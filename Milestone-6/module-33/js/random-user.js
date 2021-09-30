const user = () => {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => randomUser(data))
}
const randomUser = (data) => {
    const img = data.results[0].picture.large;
    const email = data.results[0].email;
    const random = document.getElementById('random');
    random.innerHTML = `
        <div class = "mx-auto mt-5 card w-25 shadow" >
            <img src="${img}" class="mt-3" alt="..." height="150px" width="150px" style="border-radius:50%; margin:0 auto;padding: 3px;border: 2px solid gray;">
            <div class="card-body">
                <h5 class="text-center card-title">${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}</h5>
                <p class="card-text text-center">Email: ${email}</p>
                <p class="text-center"><a href="#" class="btn btn-primary" onclick="user()">Next User</a></p>
            </div>
        </div>
    `
}