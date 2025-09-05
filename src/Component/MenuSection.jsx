import React, { useState } from "react";
import "./MenuSection.css";

const DATA = {
  Specials: [
    "https://preview.colorlib.com/theme/allfood/assets/img/gallery/gallery1.png",
    "https://preview.colorlib.com/theme/allfood/assets/img/gallery/gallery2.png",
    "https://preview.colorlib.com/theme/allfood/assets/img/gallery/gallery3.png",
    "https://preview.colorlib.com/theme/allfood/assets/img/gallery/gallery4.png",
  ],
  Lunch: [
    "https://preview.colorlib.com/theme/allfood/assets/img/gallery/gallery2.png",
    "https://preview.colorlib.com/theme/allfood/assets/img/gallery/gallery3.png",
    "https://preview.colorlib.com/theme/allfood/assets/img/gallery/gallery4.png",
    "https://preview.colorlib.com/theme/allfood/assets/img/gallery/gallery1.png",
  ],
  Breakfast: [
    "https://preview.colorlib.com/theme/allfood/assets/img/gallery/gallery3.png",
    "https://preview.colorlib.com/theme/allfood/assets/img/gallery/gallery4.png",
    "https://preview.colorlib.com/theme/allfood/assets/img/gallery/gallery1.png",
    "https://preview.colorlib.com/theme/allfood/assets/img/gallery/gallery2.png",
  ],
  Dinner: [
    "https://preview.colorlib.com/theme/allfood/assets/img/gallery/gallery4.png",
    "https://preview.colorlib.com/theme/allfood/assets/img/gallery/gallery1.png",
    "https://preview.colorlib.com/theme/allfood/assets/img/gallery/gallery2.png",
    "https://preview.colorlib.com/theme/allfood/assets/img/gallery/gallery3.png",
  ],
};

const MenuSection = () => {
  const [active, setActive] = useState("Specials");
  const categories = Object.keys(DATA);
  const images = DATA[active];

  return (
    <section className="menu">
      <div className="menu-header">
        <span className="subtitle">Our Offered Menu</span>
        <h2>Some Trendy And Popular Courses Offered</h2>

        <div className="menu-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={active === cat ? "active" : ""}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      
      <div className="collage">
        <div className="left big menu-card">
          <img src={images[0]} alt="menu" />
          <div className="overlay">
            <h2>{active} Item 1</h2>
            <p>Delicious and tasty</p>
            <span className="price">$25</span>
            <button>Order Now</button>
          </div>
        </div>

        <div className="middle medium menu-card">
          <img src={images[1]} alt="menu" />
          <div className="overlay">
            <h2>{active} Item 2</h2>
            <p>Fresh and healthy</p>
            <span className="price">$18</span>
            <button>Order Now</button>
          </div>
        </div>

        <div className="right">
          <div className="small menu-card">
            <img src={images[2]} alt="menu" />
            <div className="overlay">
              <h2>{active} Item 3</h2>
              <p>Hot and tasty</p>
              <span className="price">$12</span>
              <button>Order Now</button>
            </div>
          </div>

          <div className="small menu-card">
            <img src={images[3]} alt="menu" />
            <div className="overlay">
              <h2>{active} Item 4</h2>
              <p>Light and yummy</p>
              <span className="price">$20</span>
              <button>Order Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
