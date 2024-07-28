import React from "react";
import "./CategorySection.css";
import homecategory1 from "../assets/homecategory1.png";
import homecategory2 from "../assets/homecategory2.png";
const CategorySection = () => {
  const categories = [
    {
      id: 1,
      image: `${homecategory1}`,
      title: "Wildlife and Nature",
      link: "#",
    },
    {
      id: 2,
      image: `${homecategory2}`,
      title: "Travel and Adventure",
      link: "#",
    },
  ];

  return (
    <div className="category-section">
      {categories.map((category) => (
        <div key={category.id} className="category-item">
          <img
            src={category.image}
            alt={category.title}
            className="category-image"
          />
          <div className="category-info">
            <a href={category.link} className="category-title">
              {category.title} &rarr;
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;
