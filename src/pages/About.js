import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-page">

      {/* ABOUT HERO */}
      <section
        className="about-hero"
        style={{
          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(0, 0, 0, 0.96) 0%,
              rgba(0, 0, 0, 0.75) 35%,
              rgba(0, 0, 0, 0.05) 75%
            ),
            url("/images/about.jpg")
          `
        }}
      >
        <div className="about-hero-copy">
          <h1>
            ABOUT
            <br />
            <span>ZICKZACK</span>
          </h1>

          <p>
            A Lebanese streetwear brand built
            <br />
            for self-expression, creativity,
            <br />
            and everyday style.
          </p>
        </div>
      </section>

      {/* OUR MISSION */}
      <section className="mission-section">

        <div className="mission-image">
          <img
            src="/images/about2.jpg"
            alt="ZICKZACK black, white and yellow hoodies"
          />
        </div>

        <div className="mission-copy">
          <h2>Our Mission</h2>

          <p>
            To give you high-quality, stylish, and customizable
            streetwear that lets you express who you are —
            your ideas, your design, your style.
          </p>
        </div>

      </section>

      {/* OUR VALUES */}
      <section className="values-section">

        <h2>Our Values</h2>

        <div className="values-grid">

          {/* QUALITY */}
          <div className="value-card">

            <svg viewBox="0 0 64 64" className="value-icon">
              <path d="M18 8h28l14 16-28 34L4 24z" />
              <path d="M4 24h56M18 8l14 50L46 8M18 8l14 16L46 8" />
            </svg>

            <h3>Quality</h3>

            <p>
              Premium materials
              <br />
              built to last.
            </p>

          </div>

          {/* CREATIVITY */}
          <div className="value-card">

            <svg viewBox="0 0 64 64" className="value-icon lightning-icon">
              <path d="M36 3L12 35h18l-3 26 25-36H33z" />
            </svg>

            <h3>Creativity</h3>

            <p>
              Unique designs
              <br />
              and full customization.
            </p>

          </div>

          {/* SELF-EXPRESSION */}
          <div className="value-card">

            <svg viewBox="0 0 64 64" className="value-icon people-icon">
              <circle cx="32" cy="15" r="8" />
              <circle cx="10" cy="27" r="6" />
              <circle cx="54" cy="27" r="6" />
              <path d="M15 57c0-13 7-21 17-21s17 8 17 21" />
              <path d="M2 53c0-9 4-15 11-15M62 53c0-9-4-15-11-15" />
            </svg>

            <h3>Self-Expression</h3>

            <p>Wear what represents you.</p>

          </div>

        </div>
      </section>

    </div>
  );
}

export default About;