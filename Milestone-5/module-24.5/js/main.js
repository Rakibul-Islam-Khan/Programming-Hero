document.getElementsByTagName('button')[3].addEventListener('click', function () {
    const btn = document.querySelectorAll(".card");
    for (const b of btn) {
        b.style.display = "none";
    }
    console.log(btn)
})