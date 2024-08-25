// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import Bestseller from "./pages/bestseller"; // Ensure the filename is correct
// import Navbar from "./components/Navbar";

// const App = () => {
//   return (
//     <div>
//       {/* <Navbar /> */}
//       <Routes>
//         <Route exact path="/" element={<Home />} />
//         <Route path="/bestsellers" element={<Bestseller />} />
//         {/* Add more routes as needed */}
//       </Routes>
//     </div>
//   );
// };

// export default App;

// src/App.js

// src/App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Home from "./pages/Home";
import Bestsellers from "./pages/Bestsellers";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";
import Navbar from "./components/Navbar";

const stripePromise = loadStripe("your-publishable-key-here");

const App = () => {
  return (
    <Elements stripe={stripePromise}>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/bestsellers" element={<Bestsellers />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
        </Routes>
      </Router>
    </Elements>
  );
};

export default App;
