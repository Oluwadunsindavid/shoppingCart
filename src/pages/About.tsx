import React from "react";

export function About() {
  return (
    <div className="about-container">
      <h1>About Us</h1>

      <section className="about-section">
        <h2>Who We Are</h2>
        <p>
          Welcome to <strong>our store</strong>, your number one destination for
          premium products, unbeatable prices, and exceptional customer service.
        </p>
        <p>
          Founded in 2025 and based in Abuja, Nigeria. Our journey began with
          one goal:{" "}
          <em>"To make online shopping easier, faster, and more enjoyable."</em>
        </p>
      </section>

      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is simple:{" "}
          <em>
            "Deliver high-quality products to your doorstep with speed and
            satisfaction."
          </em>
        </p>
        <ul className="about-list">
          <li>Curated top-rated products</li>
          <li>Secure checkout & fast delivery</li>
          <li>Real reviews & transparent pricing</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>What Makes Us Different?</h2>
        <ul className="about-list">
          <li>Customer-Centered Experience</li>
          <li>Handpicked Quality Products</li>
          <li>Fast, Reliable Shipping</li>
          <li>Honest & Transparent Service</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Our Promise</h2>
        <p>
          We stand by every product we sell. If you’re not 100% satisfied, we’ll
          make it right.
        </p>
      </section>

      <section className="about-section">
        <h2>Join Us</h2>
        <p>
          Join thousands of happy customers who trust us. Got questions?{" "}
          <a
            href="https://wa.me/2347036010547"
            className="about-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact us
          </a>
        </p>
      </section>

      <footer className="about-footer">
        <p>🖤 Thanks for shopping with us.</p>
      </footer>
    </div>
  );
}
