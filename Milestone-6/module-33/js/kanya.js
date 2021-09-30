const shortText = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => quote(data))
}
const quote = (data) => {
    const text = data.quote;
    const blockQuote = document.getElementById('quote');
    blockQuote.innerHTML = `
    <p style='text-align:center;font-weight:bold;'>❝ ${text} ❞</p>
    `
}
