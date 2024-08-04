import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./InstagramSlider.css";
import insta1 from "../assets/instagram.png";
import insta2 from "../assets/instagram2.png";
const InstagramSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="instagram-slider-container">
      <h2>#TheMahuaStore on Instagram</h2>
      <Slider {...settings}>
        <div className="slider-item">
          <img src={insta1} alt="Instagram 1" />
        </div>
        <div className="slider-item">
          <img src={insta2} alt="Instagram 2" />
        </div>
        <div className="slider-item">
          <img src={insta1} alt="Instagram 3" />
        </div>
      </Slider>

      <h3>Quick links</h3>
      <ul>
        <a href="">About Us</a>
        <a href="">Shipping Policy</a>
        <a href="">Returns/Exchange</a>
        <a href="">Terms of Service</a>
        <a href="">Privacy Policy</a>
        <a href=""> Contact Us</a>
      </ul>
    </div>
  );
};

export default InstagramSlider;
