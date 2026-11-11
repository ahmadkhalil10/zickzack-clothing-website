import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "./Cart.css";

function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (total, item) => total + Number(item.price),
    0
  );

  return (
    <div className="cart-page">

      <div className="cart-heading">
        <h1>MY <span>CART</span></h1>
        <p>Your selected ZICKZACK pieces.</p>
      </div>

      {cartItems.length === 0 ? (

        <div className="empty-cart">
          <div className="empty-cart-icon">🛒</div>
          <h2>YOUR CART IS EMPTY</h2>
          <p>Looks like you haven't added anything yet.</p>

          <Link to="/customize" className="continue-shopping">
            CONTINUE SHOPPING →
          </Link>
        </div>

      ) : (

        <div className="cart-content">

          <div className="cart-list">
            {cartItems.map((item, index) => (

              <div className="cart-row" key={item.id || index}>

                <img src={item.image} alt={item.name} />

                <div className="cart-product-info">
                  <h3>{item.name}</h3>

                  <p>Color: {item.color || "N/A"}</p>
                  <p>Size: {item.size || "N/A"}</p>

                  {item.customText && (
                    <p>Custom Text: {item.customText}</p>
                  )}

                  <strong>${Number(item.price).toFixed(2)}</strong>
                </div>

                <button
                  className="remove-button"
                  onClick={() => removeFromCart(index)}
                >
                  Remove
                </button>

              </div>

            ))}
          </div>

          <div className="cart-total">
            <h2>
              TOTAL: <span>${totalPrice.toFixed(2)}</span>
            </h2>
          </div>

        </div>

      )}

    </div>
  );
}

export default Cart;