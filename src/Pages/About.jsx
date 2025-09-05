import React from "react";
import AboutSection from "../Component/AboutSection";
import AboutSection2 from "../Component/AboutSection2";
import Footer from "../Component/Footer";
import BookTable from "../Component/BookTable"
function About() {
  return (
    <div>
      <AboutSection />
      <AboutSection2 />
      <BookTable />
      <Footer />
    </div>
  );
}

export default About;
