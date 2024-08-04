import React from "react";
import Slider from "react-slick";
import "./TestimonialsSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonial1 from "../assets/test.jpg";
import testimonial2 from "../assets/test2.jpg";
import testimonial3 from "../assets/test3.jpg";
import testimonial4 from "../assets/test4.jpg";

const testimonials = [
  {
    id: 1,
    image: `${testimonial1}`, // Ensure these image paths are correct
    name: "Ishita S.",
    text: "Love the feel of it and the fit of it... creates an impression on fellow campers",
    rating: 5,
  },
  {
    id: 2,
    image: `${testimonial2}`,
    name: "Muffi T.",
    text: "Love the feel of it and the fit of it... creates an impression on fellow campers",
    rating: 5,
  },
  {
    id: 3,
    image: `${testimonial3}`,
    name: "Rutuja R.",
    text: "Love the feel of it and the fit of it... creates an impression on fellow campers",
    rating: 5,
  },
  {
    id: 4,
    image: `${testimonial4}`,
    name: "Shweta K.",
    text: "Love the feel of it and the fit of it... creates an impression on fellow campers",
    rating: 5,
  },
];

const TestimonialsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonials-slider">
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-item">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="testimonial-image"
            />
            <div className="testimonial-content">
              <div className="testimonial-rating">
                {"★".repeat(testimonial.rating)}
              </div>
              <h4 className="testimonial-name">{testimonial.name}</h4>
              <p className="testimonial-text">{testimonial.text}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialsSlider;
