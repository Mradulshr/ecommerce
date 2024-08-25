import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { CartContext } from "../context/CartContext";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));
  const { addToCart } = useContext(CartContext);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="product-details-container">
      <div className="product-details">
        {
          /* <div className="product-images">
          <img
            src={product.mainImage}
            alt={product.name}
            className="product-main-image"
          />
          <div className="product-thumbnail-images">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={product.name}
                className="product-thumbnail-image"
              />
            ))}
          </div>
        </div> */
          <div className="product-images">
            <img
              src={product.mainImage}
              alt={product.name}
              className="product-main-image"
            />
            <div className="product-thumbnail-images">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={product.name}
                  className="product-thumbnail-image"
                />
              ))}
            </div>
          </div>
        }
        <div className="product-info">
          <h1>{product.name}</h1>
          <div className="product-price">
            <span className="original-price">₹1099.00</span>
            <span className="discounted-price">₹899.00</span>
          </div>
          <div className="product-rating">
            <span>⭐⭐⭐⭐⭐</span>
            <span>({product.reviews} reviews)</span>
          </div>
          <div className="product-sizes">
            <h3>Size</h3>
            <div className="size-buttons">
              {product.sizes.map((size, index) => (
                <button key={index} className="size-button">
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="product-colors">
            <h3>Color</h3>
            <div className="color-buttons">
              {product.colors.map((color, index) => (
                <button key={index} className="color-button">
                  {color}
                </button>
              ))}
            </div>
          </div>
          <div className="product-quantity">
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              defaultValue="1"
            />
          </div>
          <div className="action-buttons">
            <button
              onClick={() => addToCart(product)}
              className="add-to-cart-button"
            >
              Add to Cart
            </button>
            <button className="buy-now-button">Buy it now</button>
          </div>
          <div className="product-disclaimer">
            Product images are for illustrative purposes only and may slightly
            differ from the actual product.
          </div>
        </div>
      </div>
      <div className="product-description">
        <h3>Designed & Made in India 🇮🇳</h3>
        <h4>Type & Sizes</h4>
        <ul>
          <li>Round necked Unisex T-shirts</li>
          <li>
            <strong>
              WE STRONGLY RECOMMEND referring to the chart mentioned on the
              product page.
            </strong>
          </li>
        </ul>
        <h4>Fabric:</h4>
        <ul>
          <li>100% Cotton</li>
          <li>Single Jersey: 180 GSM</li>
        </ul>
        <h4>Usage Instructions:</h4>
        <ul>
          <li>Machine wash cold</li>
          <li>Do not tumble dry</li>
          <li>Iron inside out, do not iron directly on the design</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductDetails;
