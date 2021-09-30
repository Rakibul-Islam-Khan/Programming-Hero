const images = [
    'img/img01.jpg',
    'img/img02.jpg',
    'img/img03.jpg',
    'img/img04.jpg',
    'img/img07.jpg',
    'img/img08.jpg',
    'img/img09.jpg',
    'img/img10.jpg',
    'img/img12.jpg',
]
let imageIndex = 0;
const singleImg = document.getElementById('img');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
setInterval(() => {
    if (imageIndex >= images.length) {
        imageIndex = 0;
    };
    singleImg.src = images[imageIndex++];
}, 2000);
next.addEventListener('click', function () {
    imageIndex++;
    if (imageIndex >= images.length) {
        imageIndex = 0;
        singleImg.src = images[imageIndex];
    } else {
        singleImg.src = images[imageIndex];
    }
})
prev.addEventListener('click', function () {
    imageIndex--;
    if (imageIndex < 0) {
        imageIndex = images.length - 1;
        singleImg.src = images[imageIndex];
    } else {
        singleImg.src = images[imageIndex];
    }
})
