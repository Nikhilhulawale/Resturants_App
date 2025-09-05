import React from "react";
import { FaUtensils, FaUserTie } from "react-icons/fa";
import { GiCook } from "react-icons/gi";
import "./Services.css";

const Services = () => {
  return (
    <section className="services">
      <p className="section-subtitle">Services We Offer</p>
      <h2 className="section-title">Our Best Services</h2>

      <div className="services-container">
        <div className="service-card">
          <GiCook size={60} color="#ff4c00" />
          <h3>Best Chef</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore.
          </p>
        </div>

        <div className="service-card">
          <FaUtensils size={60} color="#ff4c00" />
          <h3>Quality Food</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore.
          </p>
        </div>

        <div className="service-card">
          <FaUserTie size={60} color="#ff4c00" />
          <h3>Perfect Cook</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
