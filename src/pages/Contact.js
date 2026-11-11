import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    alert("Thank you for contacting ZICKZACK!");

    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <div className="contact-page">

      {/* LEFT PHOTO */}
      <div className="contact-photo">
        <img src="/images/contact.jpg" alt="ZICKZACK custom clothing" />
      </div>

      {/* MIDDLE CONTACT INFORMATION */}
      <section className="contact-middle">

        <div className="contact-title">
          <h1>
            CONTACT
            <br />
            <span>US</span>
          </h1>
          <div className="contact-yellow-mark"></div>
        </div>

        <p className="contact-intro">
          Have a question, custom order,
          <br />
          or need help? Reach out to us —
          <br />
          we're here for you.
        </p>

        {/* WHATSAPP */}
        <div className="contact-item">
          <div className="contact-icon">
            <svg viewBox="0 0 24 24">
              <path d="M20 11.5a8.5 8.5 0 0 1-12.5 7.5L3 21l2-5.5A8.5 8.5 0 1 1 20 11.5Z" />
              <path d="M8 8c1 4 4 7 8 8l2-2-3-2-2 1c-2-1-3-2-4-4l1-2-2-2-2 3Z" />
            </svg>
          </div>

          <div>
            <h3>WhatsApp</h3>
            <a href="https://wa.me/96181912460">
              +961 81 912 460
            </a>
            <p>Chat with us directly</p>
          </div>
        </div>

        {/* INSTAGRAM */}
        <div className="contact-item">
          <div className="contact-icon">
            <svg viewBox="0 0 24 24">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="18" cy="6" r="1" />
            </svg>
          </div>

          <div>
            <h3>Instagram</h3>
            <a
              href="https://www.instagram.com/zickzack.lb/"
              target="_blank"
              rel="noreferrer"
            >
              @zickzack.lb
            </a>
            <p>Follow us for new drops<br />and updates</p>
          </div>
        </div>

        {/* DELIVERY */}
        <div className="contact-item">
          <div className="contact-icon">
            <svg viewBox="0 0 24 24">
              <path d="M2 6h13v12H2z" />
              <path d="M15 10h4l3 4v4h-7z" />
              <circle cx="6" cy="19" r="2" />
              <circle cx="18" cy="19" r="2" />
              <path d="M18 10v4h4" />
            </svg>
          </div>

          <div>
            <h3>Delivery</h3>
            <p>Across Lebanon 🇱🇧</p>
            <p>Fast and reliable delivery<br />to all areas</p>
          </div>
        </div>

      </section>

      {/* RIGHT CONTACT FORM */}
      <section className="contact-form-box">

        <h2>Send Us a Message</h2>

        <form onSubmit={handleSubmit}>

          <label htmlFor="contact-name">Full Name *</label>
          <input
            id="contact-name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="contact-email">Email *</label>
          <input
            id="contact-email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="contact-message">Message *</label>
          <textarea
            id="contact-message"
            placeholder="Write your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />

          <button type="submit">
            <span>➤</span> Send Message
          </button>

        </form>

      </section>

      {/* DECORATIVE ELEMENTS */}
      <div className="contact-crown">♕</div>

      <div className="contact-slogan">
        Same<br />
        Vision<br />
        Bigger<br />
        Dreams
        <span></span>
      </div>

    </div>
  );
}

export default Contact;