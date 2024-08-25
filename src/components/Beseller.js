// src/components/Bestsellers.js
import React from "react";
import "./bestseller.css";
import { Link } from "react-router-dom";
import bestsellerimage1 from "../assets/1.png";
import bestsellerimage2 from "../assets/2.png";
import bestsellerimage3 from "../assets/3.png";
import bestsellerimage4 from "../assets/4.png";
const Bestsellers = () => {
  const bestsellers = [
    {
      id: 1,
      image: `${bestsellerimage1}`,
      title: "Verified Pahadan",
      price: "Rs. 899.00",
      originalPrice: "Rs. 1,199.00",
      rating: 1,
      sale: true,
    },
    {
      id: 2,
      image: `${bestsellerimage2}`,
      title: "The Photographer : Male",
      price: "Rs. 899.00",
      originalPrice: "Rs. 1,199.00",
      rating: 8,
      sale: true,
    },
    {
      id: 3,
      image: `${bestsellerimage3}`,
      title: "Rambler's Boots",
      price: "Rs. 899.00",
      originalPrice: "Rs. 1,199.00",
      rating: 2,
      sale: true,
    },
    {
      id: 4,
      image: `${bestsellerimage4}`,
      title: "Bag full of Memories",
      price: "Rs. 899.00",
      originalPrice: "Rs. 1,199.00",
      rating: 3,
      sale: true,
    },
  ];

  return (
    <div className="bestsellers-container">
      <h2>Bestsellers</h2>
      <div className="bestsellers-grid">
        {bestsellers.map((item) => (
          <div key={item.id} className="bestseller-item">
            <img
              src={item.image}
              alt={item.title}
              className="bestseller-image"
            />
            {item.sale && <span className="sale-tag">Sale</span>}
            <div className="bestseller-details">
              <h3>{item.title}</h3>
              <div className="bestseller-rating">
                {"★".repeat(Math.max(0, Math.min(item.rating, 5)))}
                {"☆".repeat(Math.max(0, 5 - Math.min(item.rating, 5)))}
              </div>
              <div className="bestseller-prices">
                <span className="original-price">{item.originalPrice}</span>
                <span className="sale-price">{item.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <button className="view-all-button">View all</button> */}
      {/* <button className="view-all-button"> */}
      <Link to="/bestsellers">View all</Link>
      {/* </button> */}
    </div>
  );
};

export default Bestsellers;
