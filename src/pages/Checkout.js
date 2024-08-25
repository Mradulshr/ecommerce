// src/pages/Checkout.js

import React, { useState } from "react";
import ShippingForm from "../pages/ShippingForm";
import CheckoutForm from "../pages/CheckoutForm";

const Checkout = () => {
  const [shippingDetails, setShippingDetails] = useState(null);
  const [isShippingComplete, setIsShippingComplete] = useState(false);

  const handleShippingDetailsSubmit = (details) => {
    setShippingDetails(details);
    setIsShippingComplete(true);
  };

  const handlePaymentSuccess = (paymentId) => {
    // You can handle the order confirmation process here
    console.log("Payment Successful:", paymentId);
    // Possibly navigate to an order confirmation page
  };

  return (
    <div>
      {!isShippingComplete ? (
        <ShippingForm onShippingDetailsSubmit={handleShippingDetailsSubmit} />
      ) : (
        <CheckoutForm onSuccessfulCheckout={handlePaymentSuccess} />
      )}
    </div>
  );
};

export default Checkout;
