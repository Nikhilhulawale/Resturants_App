import React from "react";
import Front from "../Component/Front";
import AboutSection from "../Component/AboutSection";
import MenuSection from "../Component/MenuSection";
import Services from "../Component/Services";
import BlogSection from "../Component/BlogSection";
import BookTable from "../Component/BookTable";
import Footer from "../Component/Footer";
import Contact from "../Component/Contact";
function Home() {
  return (
    <div>
      <Front />
      <AboutSection />
      <MenuSection />
      <Services />
      <BlogSection />
      <BookTable />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
