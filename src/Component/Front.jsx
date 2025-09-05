import React from "react";
import "./front.css";

const Front = () => {
  return (
    <section className="hero">
      <div className="overlay">
        <div className="hero-content">
          <span className="subtitle">Discover Your Taste</span>
          <h1>
            We believe good food <br /> offer great smile
          </h1>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
            aliquip ex ea commodo consequat is aute irure.
          </p>
          <button className="btn-reserve">Reservation</button>
        </div>
      </div>
    </section>
  );
};

export default Front;
