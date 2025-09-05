import React from "react";
import "./AboutSection.css";
import { FaUtensils, FaConciergeBell, FaUserTie, FaUserFriends } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section className="about">
     
      <div className="about-content">
        <span className="subtitle">Discover Your Taste</span>
        <h1>
          We Provide Good Food <br /> For Your Family!
        </h1>
        <p>
          Ut enim acgsd minim veniam, quxics nostrud exercitation ullamco laboris
          nisi usit aliquip ex ea commodo consequat is aute irure m, quis nostrud exer.
        </p>

        <div className="features">
          <div className="feature-item">
            <FaUtensils className="feature-icon" />
            <p>Ut enim ad minim veniam, quis nostrud exer.</p>
          </div>
          <div className="feature-item">
            <FaConciergeBell className="feature-icon" />
            <p>Ut enim ad minim veniam, quis nostrud exer.</p>
          </div>
          <div className="feature-item">
            <FaUserTie className="feature-icon" />
            <p>Ut enim ad minim veniam, quis nostrud exer.</p>
          </div>
          <div className="feature-item">
            <FaUserFriends className="feature-icon" />
            <p>Ut enim ad minim veniam, quis nostrud exer.</p>
          </div>
        </div>
      </div>

   
      <div className="about-image">
        <img
          src="https://preview.colorlib.com/theme/allfood/assets/img/gallery/about.png"
          alt="Chef"
        />
      </div>
    </section>
  );
};

export default AboutSection;


