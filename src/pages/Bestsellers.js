import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./bestsellerproduct.css";
import bestseller1 from "../assets/1.png";
import bestseller2 from "../assets/2.png";
import bestseller3 from "../assets/3.png";
import bestseller4 from "../assets/4.png";
import InstagramSlider from "../components/InstagramSlider";
import Footer from "../components/Footer";

const products = [
  {
    id: 1,
    name: "Bag full of Memories",
    img: bestseller1,
    rating: 5,
    reviews: 3,
    oldPrice: 999,
    newPrice: 899,
    onSale: true,
    inStock: true,
  },
  {
    id: 2,
    name: "Brighter Day",
    img: bestseller2,
    rating: 4,
    reviews: 2,
    oldPrice: 999,
    newPrice: 799,
    onSale: true,
    inStock: false,
  },
  {
    id: 3,
    name: "Colorful Dreams",
    img: bestseller3,
    rating: 4,
    reviews: 2,
    oldPrice: 999,
    newPrice: 699,
    onSale: true,
    inStock: false,
  },
  {
    id: 4,
    name: "Summer Vibes",
    img: bestseller4,
    rating: 4,
    reviews: 2,
    oldPrice: 999,
    newPrice: 699,
    onSale: true,
    inStock: false,
  },
  {
    id: 5,
    name: "Summer Vibes",
    img: bestseller4,
    rating: 4,
    reviews: 2,
    oldPrice: 999,
    newPrice: 699,
    onSale: true,
    inStock: false,
  },
  {
    id: 6,
    name: "Bag full of Memories",
    img: bestseller1,
    rating: 5,
    reviews: 3,
    oldPrice: 999,
    newPrice: 899,
    onSale: true,
    inStock: true,
  },
  {
    id: 7,
    name: "Brighter Day",
    img: bestseller2,
    rating: 4,
    reviews: 2,
    oldPrice: 999,
    newPrice: 799,
    onSale: true,
    inStock: false,
  },
  {
    id: 8,
    name: "Brighter Days",
    img: bestseller2,
    rating: 4,
    reviews: 2,
    oldPrice: 331,
    newPrice: 111,
    onSale: true,
    inStock: false,
  },
  {
    id: 9,
    name: "Brighter Day",
    img: bestseller2,
    rating: 4,
    reviews: 2,
    oldPrice: 1211,
    newPrice: 799,
    onSale: true,
    inStock: false,
  },
  {
    id: 10,
    name: "Brighter Days",
    img: bestseller2,
    rating: 4,
    reviews: 2,
    oldPrice: 545,
    newPrice: 776,
    onSale: true,
    inStock: false,
  },
  {
    id: 11,
    name: "Brighter Day",
    img: bestseller2,
    rating: 4,
    reviews: 2,
    oldPrice: 111,
    newPrice: 212,
    onSale: true,
    inStock: false,
  },
  {
    id: 12,
    name: "Brighter Days",
    img: bestseller2,
    rating: 4,
    reviews: 2,
    oldPrice: 444,
    newPrice: 199,
    onSale: true,
    inStock: false,
  },
];

const Bestsellers = () => {
  const [availabilityFilter, setAvailabilityFilter] = useState({
    inStock: false,
    outOfStock: false,
  });
  const [priceRange, setPriceRange] = useState({
    minPrice: "",
    maxPrice: "",
  });
  const [sortOption, setSortOption] = useState("featured");

  // State variables for dropdown visibility
  const [isAvailabilityDropdownOpen, setIsAvailabilityDropdownOpen] =
    useState(false);
  const [isPriceDropdownOpen, setIsPriceDropdownOpen] = useState(false);

  const handleFilterChange = (event) => {
    const { name, checked } = event.target;
    setAvailabilityFilter((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handlePriceChange = (event) => {
    const { name, value } = event.target;
    setPriceRange((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const filteredProducts = products.filter((product) => {
    const isAvailable =
      availabilityFilter.inStock && !availabilityFilter.outOfStock
        ? product.inStock
        : availabilityFilter.outOfStock && !availabilityFilter.inStock
        ? !product.inStock
        : true;

    const { minPrice, maxPrice } = priceRange;
    const priceWithinRange =
      (!minPrice || product.newPrice >= parseInt(minPrice)) &&
      (!maxPrice || product.newPrice <= parseInt(maxPrice));

    return isAvailable && priceWithinRange;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "price-low-to-high") {
      return a.newPrice - b.newPrice;
    } else if (sortOption === "price-high-to-low") {
      return b.newPrice - a.newPrice;
    } else if (sortOption === "alphabetical") {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });

  return (
    <div className="container">
      <h1>Bestsellers</h1>
      <div className="filters">
        <div className="filter">
          <label>Filter:</label>
          <div className="dropdown">
            <button
              className="dropbtn"
              onClick={() =>
                setIsAvailabilityDropdownOpen(!isAvailabilityDropdownOpen)
              }
            >
              Availability
            </button>
            {isAvailabilityDropdownOpen && (
              <div className="dropdown-content" style={{ display: "block" }}>
                <div className="dropdown-header">
                  <span>
                    {availabilityFilter.inStock ? "In stock selected" : ""}
                  </span>
                  <button
                    className="reset-btn"
                    onClick={() =>
                      setAvailabilityFilter({
                        inStock: false,
                        outOfStock: false,
                      })
                    }
                  >
                    Reset
                  </button>
                </div>
                <label className="checkbox-container">
                  In stock ({products.filter((p) => p.inStock).length})
                  <input
                    type="checkbox"
                    name="inStock"
                    checked={availabilityFilter.inStock}
                    onChange={handleFilterChange}
                  />
                  <span className="checkmark"></span>
                </label>
                <label className="checkbox-container">
                  Out of stock ({products.filter((p) => !p.inStock).length})
                  <input
                    type="checkbox"
                    name="outOfStock"
                    checked={availabilityFilter.outOfStock}
                    onChange={handleFilterChange}
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
            )}
          </div>
          <div className="dropdown">
            <button
              className="dropbtn"
              onClick={() => setIsPriceDropdownOpen(!isPriceDropdownOpen)}
            >
              Price
            </button>
            {isPriceDropdownOpen && (
              <div className="dropdown-content" style={{ display: "block" }}>
                <div className="dropdown-header">
                  <span>
                    The highest price is Rs.{" "}
                    {Math.max(...products.map((p) => p.newPrice))}.00
                  </span>
                  <button
                    className="reset-btn"
                    onClick={() =>
                      setPriceRange({ minPrice: "", maxPrice: "" })
                    }
                  >
                    Reset
                  </button>
                </div>
                <div className="price-inputs">
                  <label className="price-label">
                    ₹ From
                    <input
                      type="number"
                      name="minPrice"
                      value={priceRange.minPrice}
                      onChange={handlePriceChange}
                      placeholder="From"
                    />
                  </label>
                  <label className="price-label">
                    ₹ To
                    <input
                      type="number"
                      name="maxPrice"
                      value={priceRange.maxPrice}
                      onChange={handlePriceChange}
                      placeholder="To"
                    />
                  </label>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="sort">
          <label htmlFor="sort-by">Sort by:</label>
          <select id="sort-by" onChange={handleSortChange} value={sortOption}>
            <option value="featured">Featured</option>
            <option value="best-selling">Best Selling</option>
            <option value="alphabetical">Alphabetical</option>
            <option value="price-low-to-high">Price, low to high</option>
            <option value="price-high-to-low">Price, high to low</option>
          </select>
          <span className="products-count">
            {sortedProducts.length} products
          </span>
        </div>
      </div>
      <div className="product-list">
        {sortedProducts.map((product) => (
          <div key={product.id} className="product-card">
            <Link to={`/product/${product.id}`} className="link_style">
              <img src={product.img} alt={product.name} />
              <h2>{product.name}</h2>
              <div className="rating">
                {"★".repeat(product.rating)}
                {"☆".repeat(5 - product.rating)}
              </div>
              <div className="price">
                <span className="old-price">Rs. {product.oldPrice}.00</span>
                <span className="new-price">Rs. {product.newPrice}.00</span>
              </div>
              {product.onSale && <span className="sale">Sale</span>}
            </Link>
          </div>
        ))}
      </div>

      <InstagramSlider />
      <hr />
      <Footer />
    </div>
  );
};

export default Bestsellers;
