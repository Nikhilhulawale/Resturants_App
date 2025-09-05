import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/menu", label: "Menu" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="navbar">
      
      <div className="logo">
        <img
          src="https://preview.colorlib.com/theme/allfood/assets/img/logo/logo.png"
          alt="logo"
        />
      </div>

      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        {navLinks.map((link, index) => (
          <li
            key={index}
            className={location.pathname === link.path ? "active" : ""}
            onClick={() => setIsOpen(false)} 
          >
            <Link to={link.path}>{link.label}</Link>
          </li>
        ))}
      </ul>

      
      <div className="order-btn">
        <Link to="/order">Order Online</Link>
      </div>

    
      <div className="toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
