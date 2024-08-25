import React from "react";
import ProductList from "../components/bestsellerproduct";
import Navbar from "../components/Navbar";

const bestseller = () => {
  return (
    <div>
      <Navbar />
      <ProductList />
    </div>
  );
};

export default bestseller;
