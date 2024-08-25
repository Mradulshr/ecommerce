// src/pages/OrderConfirmation.js

import React from "react";
import { useLocation } from "react-router-dom";

const OrderConfirmation = () => {
  const location = useLocation();
  const { order } = location.state || {};

  return (
    <div className="order-confirmation">
      <h1>Thank you for your order!</h1>
      {order ? (
        <div>
          <p>Your order has been placed successfully.</p>
          <h2>Order Summary:</h2>
          <ul>
            {order.items.map((item) => (
              <li key={item.id}>
                {item.name} - Rs. {item.price}
              </li>
            ))}
          </ul>
          <h3>Total Amount: Rs. {order.totalAmount}</h3>
          <p>Order Number: {order.orderNumber}</p>
        </div>
      ) : (
        <p>Something went wrong with your order. Please try again.</p>
      )}
    </div>
  );
};

export default OrderConfirmation;
