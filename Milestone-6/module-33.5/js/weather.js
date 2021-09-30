const loadWeather = () => {
    const search = document.getElementById('input-filed');
    const searchResult = search.value;
    search.value = '';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchResult}&appid=3e4a8a4046d4251918384652a3034793`)
        .then(res => res.json())
        .then(data => city(data))
}
const city = (data) => {
    console.log(data);
    if (data.cod == 404) {
        alert('Sorry you type wrong city')
    } else {
        const kelvin = 273;
        const year = new Date();
        const date = new Date();
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const celsius = Math.floor(data.main.temp - kelvin);
        const fahrenheit = (celsius * 9 / 5) + 32;
        const cityName = document.getElementById('weather');
        const parent = document.getElementById('parent');
        cityName.innerHTML = `
            <div class="text-center text-white weather-status">
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
                <h1>${data.name},${data.sys.country}</h1>
                <h3><span>${celsius}</span>&deg;C / ${fahrenheit}°F</h3>
                <h5>${data.weather[0].description}</h5>
                <h3>${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]} ${year.getFullYear()}</h3>
            </div>
    `
        parent.appendChild(cityName);
    }
}
