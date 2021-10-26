import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';

const Foods = () => {

    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch("https://rakibul-islam-khan.github.io/JSON/food.json")
            .then(res => res.json())
            .then(data => setFoods(data))
    }, []);
    console.log(foods.slice(6, 12))
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="d-flex justify-content-center mt-5 flex-column">
                            <ul className="nav nav-pills mb-5 mx-auto" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active fw-bold text-dark" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Breakfast</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link fw-bold text-dark" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Lunch</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link fw-bold text-dark" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Dinner</button>
                                </li>
                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                    <div className="row row-cols-1 row-cols-md-3 g-4">
                                        {
                                            foods?.slice(0, 6)?.map(food => <Food key={food.id} food={food} />)

                                        }
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                    <div className="row row-cols-1 row-cols-md-3 g-4">
                                        {
                                            foods?.slice(6, 12)?.map(food => <Food key={food.id} food={food} />)

                                        }
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                                    <div className="row row-cols-1 row-cols-md-3 g-4">
                                        {
                                            foods?.slice(12, 18)?.map(food => <Food key={food.id} food={food} />)

                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className='btn btn-dark mt-5' type="submit">Checkout Your Food</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Foods;