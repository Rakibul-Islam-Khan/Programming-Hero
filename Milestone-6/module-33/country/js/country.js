const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => allCountry(data))
}
const allCountry = (data) => {
    const select = document.getElementById('country');
    const selectValue = select.value;
    const singleCountry = document.getElementById('single-country');
    data.forEach(country => {
        console.log(country);
        if (selectValue === country.name) {
            singleCountry.innerHTML = `
            <div class="mx-auto mt-5 card w-100 shadow">
                <img src="${country.flag}" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text">${country.name},${country.capital}</p>
                </div>
            </div>
            <!-- Button trigger modal -->
<button type="button" class="btn btn-primary w-100 mt-5" data-bs-toggle="modal" data-bs-target="#exampleModal">See Detail</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Country Details</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
                            <div class="card w-100">
                                <img src="${country.flag}" class="card-img-top" alt="...">
                                <div class="card-body text-start">
                                    <p class="card-text">Region: ${country.region}</p>
                                    <p class="card-text">Sub-Region: ${country.subregion}</p>
                                    <p class="card-text">Country: ${selectValue}</p>
                                    <p class="card-text">City: ${country.capital}</p>
                                    <p class="card-text">Official languages: ${country.languages[0].name}</p>
                                    <p class="card-text">Area: ${country.area}</p>
                                    <p class="card-text">Population: ${country.population}</p>
                                    <p class="card-text">Currencies: ${country.currencies[0].name}</p>
                                    <p class="card-text">Native-Name: ${country.nativeName}</p>
                                    <p class="card-text">Calling-Codes: +${country.callingCodes[0]}</p>
                                </div>
                            </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

        `
        }
        const option = document.createElement('option');
        option.innerText = country.name.slice(0,47);
        select.classList.add('select');
        select.appendChild(option);
    });
}