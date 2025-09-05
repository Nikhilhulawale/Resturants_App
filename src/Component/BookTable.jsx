import React from "react";

import "./BookTable.css";

const BookTable = () => {
  return (
    <section className="book-table" id="book">
      
      <div className="bg-image"></div>

      
      <div className="container">
        <div className="book-header">
          <span className="subtitle">About Our Restaurant</span>
          <h2>Book A Table</h2>
        </div>

        
        <div className="book-form">
       
          <div className="form-control">
        
            <select>
              <option>Person</option>
              <option>1 Person</option>
              <option>2 Persons</option>
              <option>3 Persons</option>
              <option>4 Persons</option>
            </select>
          </div>

       
          <div className="form-control">
            <input type="date" />
          </div>

          <div className="form-control">
            <input type="time" />
          </div>


          <button className="book-btn">Book Now</button>
        </div>
      </div>
    </section>
  );
};

export default BookTable;
