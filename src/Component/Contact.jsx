import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./Contact.css";

const Contact = ({ contactInfo = [] }) => {
  const getIcon = (type) => {
    switch (type) {
      case "address":
        return <FaMapMarkerAlt className="contact-icon" />;
      case "phone":
        return <FaPhoneAlt className="contact-icon" />;
      case "email":
        return <FaEnvelope className="contact-icon" />;
      default:
        return null;
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-header">
        <span className="subtitle">Get In Touch</span>
        <h2>Contact Us</h2>
      </div>

      <div className="contact-container">
        <div className="contact-form">
          <h3>Send Us a Message</h3>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="contact-info">
          <h3>Contact Information</h3>
          {contactInfo.length > 0 ? (
            contactInfo.map((item, index) => (
              <p key={index} className="contact-item">
                {getIcon(item.type)} <strong>{item.label}:</strong> {item.value}
              </p>
            ))
          ) : (
            <p>No contact info available</p>
          )}

          <div className="map-container">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160977461!2d73.69815189015692!3d18.524616009639846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfbcba947b69%3A0xdda8d2f6cf0c1aa!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1693200000000!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
