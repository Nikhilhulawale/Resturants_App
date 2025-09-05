
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Menu from "./Pages/Menu";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";

function App() {
  const contactData = [
    { label: "Address", value: "414011, Pune", type: "address" },
    { label: "Phone", value: "+91 8010511138", type: "phone" },
    { label: "Email", value: "bahadursam240@gmail.com", type: "email" },
  ];

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact contactInfo={contactData} />} />
      </Routes>
    </>
  );
}

export default App;


