import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Customize.css";

function HoodieIcon() {
  return (
    <svg className="custom-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M8 5 4 7 2 12l4 2 2-4v10h8V10l2 4 4-2-2-5-4-2c0 2-2 3-4 3s-4-1-4-3Z" />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg className="custom-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M2 5h13v12H2zM15 9h4l3 4v4h-7z" />
      <circle cx="6" cy="19" r="2" />
      <circle cx="18" cy="19" r="2" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg className="custom-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 2 20 5v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5l8-3Z" />
      <path d="m8 12 3 3 5-6" />
    </svg>
  );
}

function DesignIcon() {
  return (
    <svg className="custom-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="m15 5 4 4M4 20l4-.8L20 7a2.8 2.8 0 0 0-4-4L4 15l-.8 5Z" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg className="custom-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 3h2l2.5 12h11L21 7H6" />
      <circle cx="9" cy="20" r="1.5" />
      <circle cx="18" cy="20" r="1.5" />
    </svg>
  );
}

function Customize() {
  const { addToCart } = useContext(CartContext);

  const [color, setColor] = useState("Black");
  const [size, setSize] = useState("L");
  const [text, setText] = useState("");
  const [textSize, setTextSize] = useState(30);
  const [position, setPosition] = useState({ x: 50, y: 48 });
  const [dragging, setDragging] = useState(false);

  const hoodies = {
    Black: "/customize/blackhoodie.jpg",
    White: "/customize/whitehoodie.jpg",
    Yellow: "/customize/yellowhoodie.jpg",
    Grey: "/customize/greyhoodie.jpg",
    Beige: "/customize/beigehoodie.jpg"
  };

  const totalPrice = 36 + (text.trim() !== "" ? 5 : 0);

  function moveText(e) {
    if (!dragging) return;

    const box = e.currentTarget.getBoundingClientRect();

    setPosition({
      x: Math.max(5, Math.min(95, ((e.clientX - box.left) / box.width) * 100)),
      y: Math.max(5, Math.min(95, ((e.clientY - box.top) / box.height) * 100))
    });
  }

  function addCustomHoodie() {
    addToCart({
      id: Date.now(),
      name: "Custom Hoodie",
      price: totalPrice,
      image: hoodies[color],
      category: "Hoodies",
      color,
      size,
      customText: text,
      textSize
    });
  }

  return (
    <div className="customize-page">

      <div className="customize-heading">
        <h1>CUSTOMIZE <span>YOUR OWN.</span></h1>
        <p>Design your hoodie, your way.</p>
      </div>

      <div className="customize-main">

        <div className="customize-options">

          <div className="product-selected">
            <HoodieIcon />
            Hoodie
          </div>

          <div className="customize-section">
            <h2>1. Choose Color</h2>

            <div className="color-options">
              {Object.keys(hoodies).map((item) => (
                <button
                  key={item}
                  title={item}
                  className={`color-circle ${item.toLowerCase()} ${color === item ? "selected" : ""}`}
                  onClick={() => setColor(item)}
                />
              ))}
            </div>
          </div>

          <div className="customize-section">
            <h2>2. Choose Size</h2>

            <div className="size-options">
              {["S", "M", "L", "XL", "XXL"].map((item) => (
                <button
                  key={item}
                  className={`size-button ${size === item ? "selected" : ""}`}
                  onClick={() => setSize(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="customize-section">
            <h2>3. Add Your Text</h2>

            <div className="text-input">
              <span>T</span>
              <input
                type="text"
                placeholder="Enter your text..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                maxLength={25}
              />
            </div>

            <p className="drag-instruction">
              Drag your text on the hoodie to position it.
            </p>

            {text.trim() !== "" && (
              <p className="drag-instruction">Custom text adds $5.00</p>
            )}
          </div>

        </div>

        <div className="customize-preview">

          <div
            className="hoodie-stage"
            onPointerMove={moveText}
            onPointerUp={() => setDragging(false)}
            onPointerCancel={() => setDragging(false)}
          >
            <img
              src={hoodies[color]}
              alt={`${color} hoodie`}
              className="hoodie-image"
              draggable="false"
            />

            {text.trim() !== "" && (
              <div
                className="hoodie-custom-text"
                style={{
                  left: `${position.x}%`,
                  top: `${position.y}%`,
                  fontSize: `${textSize}px`
                }}
                onPointerDown={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  e.currentTarget.parentElement.setPointerCapture(e.pointerId);
                  setDragging(true);
                }}
              >
                {text}
              </div>
            )}
          </div>

          <div className="text-size-box">
            <h2>Text Size</h2>

            <input
              type="range"
              min="15"
              max="70"
              value={textSize}
              onChange={(e) => setTextSize(Number(e.target.value))}
            />

            <span>{textSize} px</span>
          </div>

        </div>

      </div>

      <div className="customize-bottom">

        <div className="customize-benefit">
          <TruckIcon />
          <p>Delivery<br />Across Lebanon</p>
        </div>

        <div className="customize-benefit">
          <ShieldIcon />
          <p>Premium<br />Quality</p>
        </div>

        <div className="customize-benefit">
          <DesignIcon />
          <p>Custom<br />Designs</p>
        </div>

        <div className="customize-total">
          Total: <span>${totalPrice.toFixed(2)}</span>
        </div>

        <button
          className="customize-cart-button"
          onClick={addCustomHoodie}
        >
          <CartIcon />
          Add to Cart
        </button>

      </div>

    </div>
  );
}

export default Customize;