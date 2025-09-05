import React from "react";
import "./BlogSection.css";

const BlogSection = () => {
  const newsData = [
    {
      id: 1,
      date: "23 DEC, 2020",
      title: "Addiction When Food Plate Becomes",
      image: "https://preview.colorlib.com/theme/allfood/assets/img/gallery/blog1.png",
    },
    {
      id: 2,
      date: "23 DEC, 2020",
      title: "Addiction When Food Plate Becomes",
      image: "https://preview.colorlib.com/theme/allfood/assets/img/gallery/blog3.png",
    },
    {
      id: 3,
      date: "23 DEC, 2020",
      title: "Addiction When Food Plate Becomes",
      image: "https://preview.colorlib.com/theme/allfood/assets/img/gallery/blog2.png",
    },
  ];

  return (
    <section className="news-section">
      <div className="news-header">
        <span className="subtitle">Our New Blog News</span>
        <h2>Our Recent News</h2>
      </div>

      <div className="news-container">
        {newsData.map((item) => (
          <div className="news-card" key={item.id}>
            <img src={item.image} alt={item.title} />
            <div className="news-info">
              <span className="date">{item.date}</span>
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
