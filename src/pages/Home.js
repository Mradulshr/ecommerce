import React from "react";
import Navbar from "../components/Navbar";
import "./home.css";
import homeimage from "../assets/homeimage.webp";
import Bestsellers from "../components/Beseller";
import CategorySection from "../components/CategorySection";
import TestimonialsSlider from "../components/TestimonialsSlider";
import OurStory from "../components/OurStory";
import Collections from "../components/Collections";
import InstagramSlider from "../components/InstagramSlider";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="image-section">
        <img src={homeimage} alt="Mahua Tribe" className="image" />
        <button className="shop-now-button">Shop Now</button>
      </div>
      <Bestsellers />
      <CategorySection />
      <TestimonialsSlider />
      <OurStory />
      <Collections />
      <InstagramSlider />
      <hr />
      <Footer />
    </div>
  );
};

export default Home;
