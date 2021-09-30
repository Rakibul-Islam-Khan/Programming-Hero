const searchFood = (event) => {
    event.preventDefault();
    const inputFiled = document.getElementById('input-filed');
    const search = inputFiled.value;
    inputFiled.value = '';
    if (search == "") {
        const div = document.getElementById('no');
        div.style.marginTop = "230px";
        div.style.textAlign = "center";
        div.style.color = "darkorange";
        div.innerHTML = `
        <h1>Please write something</h1>
        `
    } else {
        if (search.length == 1) {
            const short = `https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`
            fetch(short).then(res => res.json()).then(data => searchFoodCard(data.meals));
            // console.log(short);
        } else {
            const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
            fetch(url).then(res => res.json()).then(data => searchFoodCard(data.meals));
            // console.log(url);
        }
    }
}
const searchFoodCard = meals => {
    // console.log(meals);
    const foodBox = document.getElementById('food-card');
    const load = document.getElementById('spin');
    load.style.display = 'none'
    // foodBox.innerHTML = '';
    foodBox.textContent = '';
    meals.forEach(meal => {
        const div = document.createElement('div');
        div.classList.add('box');
        div.innerHTML = `
        <div class="m-2 card shadow h-100">
                <img src="${meal.strMealThumb}" class='p-3' height='250px' width='100%' alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text" style='text-align:justify'>${meal.strInstructions.slice(0, 150)}</p>
                    <a href="${meal.strSource}" class="btn btn-success" onclick="foodId(${meal.idMeal})" target='_blank'>See Details</a>
                </div>
            </div>
        `
        foodBox.appendChild(div);
    })
}
const foodId = async (detail) => {
    const mealId = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${detail}`;
    const res = await fetch(mealId);
    const data = await res.json();
    mealDetail(data.meals[0])
    // fetch(mealId).then(res => res.json()).then(data => mealDetail(data.meals[0]));
}
const mealDetail = foodDetail => {
    // console.log(foodDetail);
    const singleFood = document.getElementById('meal-details');
    singleFood.innerHTML = '';
    const div = document.createElement('div');
    div.innerHTML = `
        <div class="mx-auto mb-5 card shadow" style="width:25rem">
            <img src="${foodDetail.strMealThumb}" class='p-3' height='250px' alt="...">
            <div class="card-body">
                <h5 class="card-title">${foodDetail.strMeal}</h5>
                <p class="card-text" style='text-align:justify'>${foodDetail.strInstructions.slice(0, 250)}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${foodDetail.strIngredient1}</li>
                <li class="list-group-item">${foodDetail.strIngredient2}</li>
                <li class="list-group-item">${foodDetail.strIngredient3}</li>
                <li class="list-group-item">${foodDetail.strIngredient4}</li>
                <li class="list-group-item">${foodDetail.strIngredient5}</li>
                <li class="list-group-item">${foodDetail.strIngredient6}</li>
            </ul>
            <div class="text-center card-body">
                <a href="#" class="btn btn-primary">Add to Cart</a>
            </div>
        </div>
    `
    singleFood.appendChild(div);
}