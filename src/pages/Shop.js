import React, { useState } from "react";
import products from "../data/Products";
import ProductCard from "../components/ProductCard";
import "./Shop.css";

function Shop() {
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("Newest");

  const filteredProducts =
    category === "All"
      ? [...products]
      : products.filter((product) => product.category === category);

  if (sort === "Price: Low to High") {
    filteredProducts.sort((a, b) => Number(a.price) - Number(b.price));
  }

  if (sort === "Price: High to Low") {
    filteredProducts.sort((a, b) => Number(b.price) - Number(a.price));
  }

  return (
    <div className="shop-page">

      {/* COLLECTIONS HERO */}
      <section
        className="shop-hero"
        style={{
          backgroundImage: 'url("/images/shop.jpg")'
        }}
      >
        <div className="shop-hero-copy">
          <h1>
            OUR
            <br />
            COLLECTIONS
          </h1>

          <div className="shop-yellow-line"></div>
        </div>
      </section>

      {/* FILTERS AND SORTING */}
      <section className="shop-content">

        <div className="shop-toolbar">

          <div className="shop-filters">
            {["All", "Hoodies", "T-Shirts", "Shorts"].map((item) => (
              <button
                key={item}
                className={
                  category === item
                    ? "shop-filter active"
                    : "shop-filter"
                }
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="shop-sort">
            <label htmlFor="sort-products">Sort by:</label>

            <select
              id="sort-products"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="Newest">Newest</option>
              <option value="Price: Low to High">Price: Low to High</option>
              <option value="Price: High to Low">Price: High to Low</option>
            </select>
          </div>

        </div>

        {/* PRODUCTS */}
        <div className="product-grid shop-product-grid">

          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

        {filteredProducts.length === 0 && (
          <p className="no-products">
            No products found in this category.
          </p>
        )}

      </section>

    </div>
  );
}

export default Shop;