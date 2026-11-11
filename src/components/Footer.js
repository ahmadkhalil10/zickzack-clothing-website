import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="18" cy="6" r="1" fill="currentColor" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M20 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.2-4.2A8.5 8.5 0 1 1 20 11.5Z" />
      <path d="M9 8.5c.5 3 2.5 5 5.5 5.5l1.2-1.2-2-1-1 1c-1.2-.5-2-1.3-2.5-2.5l1-1-1-2Z" />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M2 5h13v12H2zM15 9h4l3 4v4h-7z" />
      <circle cx="6" cy="19" r="2" />
      <circle cx="18" cy="19" r="2" />
    </svg>
  );
}

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-main">

        <div className="footer-brand">
          <img src="/images/logoo.png" alt="ZICKZACK Logo" />
          <h2>ZICKZACK</h2>
          <p>
            Custom streetwear. Made for your style.
            <br />
            Express yourself with every piece.
          </p>
        </div>

        <div className="footer-column">
          <h3>EXPLORE</h3>
          <div className="footer-yellow-line"></div>

          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/customize">Customize</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-column">
          <h3>GET IN TOUCH</h3>
          <div className="footer-yellow-line"></div>

          <a href="https://www.instagram.com/zickzack.lb/" target="_blank" rel="noreferrer">
            <InstagramIcon /> Instagram
          </a>

          <a href="https://wa.me/96181912460" target="_blank" rel="noreferrer">
            <WhatsAppIcon /> WhatsApp
          </a>

          <div className="footer-delivery">
            <TruckIcon />
            <span>Delivery Across Lebanon</span>
          </div>
        </div>

        <div className="footer-message">
          <h2>
            YOUR STYLE.
            <br />
            <span>YOUR RULES.</span>
          </h2>

          <p>Make every outfit yours.</p>

          <Link to="/customize" className="footer-button">
            DESIGN YOUR OWN →
          </Link>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 ZICKZACK. All Rights Reserved.</p>
        <span>MADE FOR SELF-EXPRESSION.</span>
      </div>

    </footer>
  );
}

export default Footer;