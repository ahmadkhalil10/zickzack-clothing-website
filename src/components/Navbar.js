import "./Navbar.css";
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cartItems } = useContext(CartContext);

  return (
    <header className="navbar">

      <Link to="/" className="brand">
        <img
          src="/images/logoo.png"
          alt="Zickzack Logo"
          className="logoo"
        />
        <span>ZICKZACK</span>
      </Link>

      <nav className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/customize">Customize</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <div className="nav-icons">
        <Link to="/cart" className="cart-link">
          🛒
          <span className="cart-count">{cartItems.length}</span>
        </Link>
      </div>

    </header>
  );
}

export default Navbar;