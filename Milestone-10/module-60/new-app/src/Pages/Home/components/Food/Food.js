import React from 'react';
import './Food.css'
const Food = (props) => {
    const { title, img, price, shortTitle } = props.food;
    return (
        <>
            <div className="col">
                <div className="card red-card">
                    <img src={img} className="card-img-top p-4" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{shortTitle}</p>
                        <h3>${price}</h3>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Food;