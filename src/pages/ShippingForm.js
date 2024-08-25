import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import "./ShippingForm.css";

const ShippingForm = ({ onShippingDetailsSubmit }) => {
  const { cart } = useContext(CartContext); // Access cart data from context
  const [shippingDetails, setShippingDetails] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    postalCode: "",
    country: "India",
    phone: "",
    saveInfo: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setShippingDetails({
      ...shippingDetails,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onShippingDetailsSubmit(shippingDetails);
  };

  return (
    <div className="checkout-container">
      <form onSubmit={handleSubmit} className="shipping-form">
        {/* Existing Form Fields */}
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={shippingDetails.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
        </div>
        <div className="save-info-checkbox">
          <input
            type="checkbox"
            name="saveInfo"
            checked={shippingDetails.saveInfo}
            onChange={handleChange}
          />
          <label>Save this information for next time</label>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={shippingDetails.firstName}
              onChange={handleChange}
              placeholder="First Name"
              required
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={shippingDetails.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={shippingDetails.address}
            onChange={handleChange}
            placeholder="Address"
            required
          />
        </div>
        <div className="form-group">
          <label>Apartment, suite, etc. (optional)</label>
          <input
            type="text"
            name="apartment"
            value={shippingDetails.apartment}
            onChange={handleChange}
            placeholder="Apartment, suite, etc. (optional)"
          />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>City</label>
            <input
              type="text"
              name="city"
              value={shippingDetails.city}
              onChange={handleChange}
              placeholder="City"
              required
            />
          </div>
          <div className="form-group">
            <label>State</label>
            <select
              name="state"
              value={shippingDetails.state}
              onChange={handleChange}
              required
            >
              <option value="">Select State</option>
              <option value="Delhi">Delhi</option>
              {/* Add more options here */}
            </select>
          </div>
          <div className="form-group">
            <label>Postal Code</label>
            <input
              type="text"
              name="postalCode"
              value={shippingDetails.postalCode}
              onChange={handleChange}
              placeholder="PIN code"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            value={shippingDetails.phone}
            onChange={handleChange}
            placeholder="Phone"
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Proceed to Payment
        </button>
      </form>

      <div className="order-summary">
        {cart.map((item) => (
          <div className="summary-item" key={item.id}>
            <div className="summary-details">
              <img
                src={item.image}
                alt={item.name}
                className="product-image"
              />
              <div>
                <p>{item.name}</p>
                <p>{item.size} / {item.color}</p>
              </div>
            </div>
            <p>₹{item.price.toFixed(2)}</p>
          </div>
        ))}
        <div className="summary-item">
          <input
            type="text"
            placeholder="Discount code or gift card"
            className="discount-input"
          />
          <button className="apply-button">Apply</button>
        </div>
        <div className="summary-item">
          <p>Subtotal</p>
          <p>₹{cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}</p>
        </div>
        <div className="summary-item">
          <p>Shipping</p>
          <p>Enter shipping address</p>
        </div>
        <div className="summary-item summary-total">
          <p>Total</p>
          <p>INR ₹{cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}</p>
        </div>
        <div className="summary-taxes">
          <p>Including ₹{(cart.reduce((sum, item) => sum + item.price * item.quantity, 0) * 0.02437).toFixed(2)} in taxes</p>
        </div>
      </div>
    </div>
  );
};

export default ShippingForm;
