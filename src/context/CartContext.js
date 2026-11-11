import React, { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [message, setMessage] = useState("");

  function addToCart(product) {
    setCartItems((previousItems) => [...previousItems, product]);

    setMessage(`${product.name} added to cart!`);

    setTimeout(() => {
      setMessage("");
    }, 2500);
  }

  function removeFromCart(index) {
    setCartItems((previousItems) =>
      previousItems.filter((item, i) => i !== index)
    );
  }

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart }}
    >
      {children}

      {message && (
        <div className="cart-toast">
          <span>✓</span>
          <div>
            <strong>Added to Cart!</strong>
            <p>{message}</p>
          </div>
        </div>
      )}
    </CartContext.Provider>
  );
}