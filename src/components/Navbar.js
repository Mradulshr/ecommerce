import React, { useContext } from "react";
import "./navbar.css";
import { CiShoppingCart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);

  // Calculate the total number of items in the cart
  const totalItems = cart.reduce(
    (total, product) => total + product.quantity,
    0
  );

  return (
    <div className="navbar-container">
      <div className="navbar-top">
        <span>
          FREE SHIPPING | SHOP 2 OR MORE PRODUCTS AND GET ₹300 OFF | USE CODE
          "TMS300" | EXCEPT 599 STORE
        </span>
      </div>
      <div className="navbar-bottom">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="navbar-links">
          <a href="/">Home</a>
          <a href="#">Unisex Round Neck T-Shirts</a>
          <a href="#">Kids T-Shirts</a>
          <a href="#">Combo Badges</a>
          <a href="#">Canvas Frames</a>
          <a href="#">Unisex Premium Hoodies</a>
          <a href="#">
            Collections <span>&#9660;</span>
          </a>
          <a href="#">599 Store</a>
          <a href="#">Happy Customers</a>
          <a href="#">Track Your Order</a>
        </div>
        <div className="navbar-icons">
          <Link to="/cart" className="cart-icon">
            <CiShoppingCart />
            {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
          </Link>
          <CiSearch />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
