import React from "react";
import { Link } from "react-router-dom";
import products from "../data/Products";
import ProductCard from "../components/ProductCard";
import "./Home.css";

function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="hero"
        style={{ backgroundImage: `url("/images/home.jpg")` }}
      >
        <div className="hero-copy">

          <h1>
            MAKE IT
            <br />
            <span>YOURS.</span>
          </h1>

          <p className="hero-description">
            Custom streetwear. Made for your style.
          </p>

          {/* BENEFITS WITH SVG ICONS */}
          <div className="hero-benefits">

            {/* DELIVERY ICON */}
            <div className="hero-benefit">
              <svg viewBox="0 0 48 48" className="benefit-icon">
                <path d="M3 13h27v23H3z" />
                <path d="M30 21h9l7 9v6H30z" />
                <circle cx="12" cy="38" r="4" />
                <circle cx="38" cy="38" r="4" />
                <path d="M3 19h19M3 25h14" />
              </svg>

              <span>
                Delivery
                <br />
                Across Lebanon
              </span>
            </div>

            {/* QUALITY ICON */}
            <div className="hero-benefit">
              <svg viewBox="0 0 48 48" className="benefit-icon">
                <path d="M24 3L43 11v13c0 12-8 18-19 22C13 42 5 36 5 24V11z" />
                <path d="M15 24l6 6 13-14" />
              </svg>

              <span>
                Premium
                <br />
                Quality
              </span>
            </div>

            {/* T-SHIRT ICON */}
            <div className="hero-benefit">
              <svg viewBox="0 0 48 48" className="benefit-icon">
                <path d="M16 5l8 5 8-5 13 8-7 11-6-4v23H16V20l-6 4-7-11z" />
                <path d="M16 5c0 7 16 7 16 0" />
              </svg>

              <span>
                Custom
                <br />
                Designs
              </span>
            </div>

          </div>

          {/* BUTTONS */}
          <div className="hero-actions">

            <Link to="/shop" className="hero-button primary-button">
              <svg viewBox="0 0 24 24">
                <path d="M3 3h2l2.5 12h11l3-9H6" />
                <circle cx="10" cy="19" r="1.5" />
                <circle cx="18" cy="19" r="1.5" />
              </svg>
              Shop Collection
            </Link>

            <Link to="/customize" className="hero-button secondary-button">
              <svg viewBox="0 0 24 24">
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.1 2.1 0 013 3L8 18l-4 1 1-4z" />
              </svg>
              Design Your Own
            </Link>

          </div>

        </div>

      </section>

      {/* FEATURED PRODUCTS */}
      <section className="section">

        <div className="section-heading">

          <h2>Featured Products</h2>

          <Link to="/shop">
            View All →
          </Link>

        </div>

        <div className="product-grid">

          {[products[2], products[3], products[0], products[5]].map(
            (product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            )
          )}

        </div>

      </section>
    </>
  );
}

export default Home;