// src/components/Navbar.js
import React from "react";
import "./navbar.css";
import { CiShoppingCart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import logo from "../assets/logo.png";
const Navbar = () => {
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
          <a href="#">Home</a>
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
          <CiShoppingCart />
          <CiSearch />

          {/* <a href="#"><i className="fa fa-search"></i></a> */}
          {/* <a href="#"><i className="fa fa-shopping-cart"></i></a> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
