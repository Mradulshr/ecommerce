import React from "react";
import Navbar from "../components/Navbar";
import "./home.css";
import homeimage from "../assets/homeimage.webp";
import Bestsellers from "../components/Beseller";
import CategorySection from "../components/CategorySection";
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="image-section">
        <img src={homeimage} alt="Mahua Tribe" className="image" />
        <button className="shop-now-button">Shop Now</button>
      </div>
      <Bestsellers />
      <CategorySection />
    </div>
  );
};

export default Home;
