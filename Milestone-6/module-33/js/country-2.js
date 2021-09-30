fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => countries(data))

const countries = (data) => {
    const countryContainer = document.getElementById('country-container');
    const hide = document.getElementById('spin');
    hide.style.display = 'none';
    data.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('box');
        div.innerHTML = `
        <img src='${country.flag}' width='250px'>
        <h3>${country.name}</h3>
        <p>${country.capital}</p>
        <button onclick="countryDetail('${country.name}')" style = 'cursor:pointer; padding:8px 40px; background:purple; color:white; border:none;font-weight:bold' > Details </button>
        `
        countryContainer.appendChild(div)
    })
}
const countryDetail = (name) => {
    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
        .then(res => res.json())
        .then(data => console.log(data))
}
