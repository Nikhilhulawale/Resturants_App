import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
       
        <div className="footer-logo">
          <img
            src="https://preview.colorlib.com/theme/allfood/assets/img/logo/logo2_footer.png"
            alt="Logo"
          />
       
        </div>

   
        <div className="footer-nav">
          <h4>Navigation</h4>
          <ul>
            <li>Home</li>
            <li>Events</li>
            <li>Testimonial</li>
            <li>Categories</li>
            <li>Contacts</li>
          </ul>
        </div>

       
        <div className="footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li>Registration</li>
            <li>Login</li>
            <li>Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        
        <div className="footer-insta">
    
          <div className="insta-grid">
            <img
              src="https://preview.colorlib.com/theme/allfood/assets/img/gallery/instagram1.png"
              alt="insta"
            />
            <img
              src="https://preview.colorlib.com/theme/allfood/assets/img/gallery/instagram2.png"
              alt="insta"
            />
            <img
              src="https://preview.colorlib.com/theme/allfood/assets/img/gallery/instagram3.png"
              alt="insta"
            />
            <img
              src="https://preview.colorlib.com/theme/allfood/assets/img/gallery/instagram4.png"
              alt="insta"
            />
            <img
              src="https://preview.colorlib.com/theme/allfood/assets/img/gallery/instagram5.png"
              alt="insta"
            />
            <img
              src="https://preview.colorlib.com/theme/allfood/assets/img/gallery/instagram6.png"
              alt="insta"
            />
          </div>
        </div>
      </div>

      
      <div className="footer-bottom">
        <p >
           ©2025 Restaurant Website |  Made By Nikhil Hulawale
          
        </p>
        <div className="social-icons">
          <span>Follow Us</span>
          <FaTwitter />
          <FaFacebookF />
          <FaInstagram />
          <FaLinkedinIn />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
