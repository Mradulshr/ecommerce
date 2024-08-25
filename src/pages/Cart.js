import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, addFromCart } = useContext(CartContext);

  if (cart.length === 0) {
    return <h2>Your cart is empty</h2>;
  }

  const totalAmount = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <div className="cart-container" style={styles.cartContainer}>
      <h1 style={styles.title}>Your cart</h1>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Product</th>
            <th style={styles.th}>Quantity</th>
            <th style={styles.th}>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr key={product.id}>
              {console.log(product)}{" "}
              {/* Add this line to log product details */}
              <td style={styles.productCell}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={styles.productImage}
                />
                <div>
                  <h2 style={styles.productName}>{product.name}</h2>
                  <p style={styles.productDetails}>Rs. {product.price}</p>
                  <p style={styles.productDetails}>Size: {product.size}</p>
                  <p style={styles.productDetails}>Color: {product.color}</p>
                </div>
              </td>
              <td style={styles.quantityCell}>
                <button
                  onClick={() => removeFromCart(product.id)}
                  style={styles.removeButton}
                >
                  −
                </button>
                <span style={styles.quantity}>{product.quantity}</span>
                <button
                  onClick={() => addFromCart(product.id)}
                  style={styles.addButton}
                >
                  +
                </button>
              </td>
              <td style={styles.totalCell}>
                Rs. {product.price * product.quantity}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={styles.estimatedTotal}>
        <p>Estimated total</p>
        <h2>Rs. {totalAmount}</h2>
      </div>
      <div style={styles.checkout}>
        <Link to="/checkout" style={styles.checkoutLink}>
          <button style={styles.checkoutButton}>Check out</button>
        </Link>
      </div>
    </div>
  );
};

const styles = {
  cartContainer: {
    width: "90%",
    margin: "auto",
    fontFamily: "Arial, sans-serif",
    maxWidth: "1200px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "20px",
  },
  th: {
    textAlign: "left",
    borderBottom: "1px solid #ccc",
    paddingBottom: "10px",
    fontSize: "16px",
  },
  productCell: {
    display: "flex",
    alignItems: "center",
    padding: "10px 0",
    flexDirection: "row",
  },
  productImage: {
    width: "80px",
    height: "80px",
    marginRight: "15px",
    objectFit: "cover",
  },
  productName: {
    margin: "0 0 5px 0",
    fontSize: "18px",
  },
  productDetails: {
    margin: "2px 0",
    fontSize: "14px",
    color: "#555",
  },
  quantityCell: {
    textAlign: "center",
  },
  quantity: {
    margin: "0 10px",
    fontSize: "16px",
  },
  removeButton: {
    padding: "5px",
    fontSize: "16px",
    cursor: "pointer",
  },
  addButton: {
    padding: "5px",
    fontSize: "16px",
    cursor: "pointer",
  },
  totalCell: {
    textAlign: "right",
    paddingRight: "10px",
    fontSize: "16px",
  },
  estimatedTotal: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px 0",
    borderTop: "1px solid #ccc",
    borderBottom: "1px solid #ccc",
    fontSize: "18px",
  },
  checkout: {
    textAlign: "right",
    marginTop: "20px",
  },
  checkoutLink: {
    textDecoration: "none",
  },
  checkoutButton: {
    backgroundColor: "#000",
    color: "#fff",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    border: "none",
  },
  // Responsive styles
  "@media (max-width: 768px)": {
    productCell: {
      flexDirection: "column",
      alignItems: "flex-start",
    },
    totalCell: {
      textAlign: "left",
      paddingTop: "10px",
    },
    estimatedTotal: {
      flexDirection: "column",
      alignItems: "flex-start",
    },
    checkout: {
      textAlign: "left",
      marginTop: "20px",
    },
  },
  "@media (max-width: 480px)": {
    productImage: {
      width: "60px",
      height: "60px",
    },
    title: {
      fontSize: "20px",
      textAlign: "center",
    },
    checkoutButton: {
      width: "100%",
    },
    table: {
      fontSize: "14px",
    },
  },
};

export default Cart;
