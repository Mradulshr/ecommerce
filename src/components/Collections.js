import React from "react";
import "./Collections.css";
import collection1 from "../assets/collection1.png";
import collection2 from "../assets/collection2.png";
import collection3 from "../assets/collection3.png";
const Collections = () => {
  return (
    <div className="collections-container">
      <h1>Collections</h1>
      <div className="collections-grid">
        <div className="collection-item">
          <img src={collection1} alt="The Mahua Tribe" />
          <a href="#the-mahua-tribe">The Mahua Tribe →</a>
        </div>
        <div className="collection-item">
          <img src={collection2} alt="Forest Soul Series" />
          <a href="#forest-soul-series">Forest Soul Series →</a>
        </div>
        <div className="collection-item">
          <img src={collection3} alt="The Seeker Collection" />
          <a href="#the-seeker-collection">The Seeker Collection →</a>
        </div>
      </div>
    </div>
  );
};

export default Collections;
