import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="col-md-12 red-col">
            <h2>Best food wating for your belly</h2>
            <div className="d-flex justify-content-center mt-4">
                <input type="search" placeholder="Search food item" className="red-input"/>
                <button type="submit" className="btn btn-danger red-btn">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
