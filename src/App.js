import React, { useState } from "react";
import "./App.css";

// Importing images from assets folder
import jakaroo from "./assets/jakaroo.jpg";
import baloot from "./assets/baloot.jpg";
import playstation from "./assets/playstation.jpg";
import otherGames from "./assets/other_games.jpg";

function App() {
  const [showPolicies, setShowPolicies] = useState(false); // State to toggle policies

  return (
    <div className="app-container">
      {/* Header Section */}
      <header className="header-container">
        <h1 className="header-title">Padel Point</h1>
        <p className="header-tagline">Your Gateway to the World of Padel!</p>
      </header>

      {/* Content Section */}
      <section className="content-section">
        <h2 className="content-title">Welcome to Padel Point</h2>
        <p className="content-description">
          Discover premium padel courts, tournaments, and training sessions designed
          to elevate your game. Join us to experience the fastest-growing sport in the world!
        </p>
        {/* Book Now Button */}
        <a href="https://malaebapp.com/Padel-Point-Jeddah" target="_blank" rel="noopener noreferrer">
          <button className="cta-button">Book Now</button>
        </a>
        {/* WhatsApp Community Button */}
        <a href="https://chat.whatsapp.com/IB5wR4jDbH38zvdtY5XLBB" target="_blank" rel="noopener noreferrer">
          <button className="whatsapp-button">Join the WhatsApp Community</button>
        </a>
        {/* Contact Us Button */}
        <a href="https://tr.ee/3hS6idzKvt" target="_blank" rel="noopener noreferrer">
          <button className="contact-button">Contact Us</button>
        </a>

        {/* Social Media Buttons */}
        <div className="social-media-buttons">
          <a href="https://tr.ee/axefk_Xxct" target="_blank" rel="noopener noreferrer">
            <button className="social-button tiktok-button">TikTok</button>
          </a>
          <a href="https://www.instagram.com/padel.point.sa" target="_blank" rel="noopener noreferrer">
            <button className="social-button instagram-button">Instagram</button>
          </a>
        </div>

        {/* Timing Section */}
        <div className="timing-section">
          <h3 className="timing-title">Operating Hours</h3>
          <p className="timing-details">4:00 PM - 4:00 AM Every Day</p>
        </div>

        {/* Pricing Section */}
        <div className="pricing-section">
          <h3 className="pricing-title">Pricing</h3>
          <ul className="pricing-list">
            <li className="pricing-item">60 Minutes = <strong>130 SR</strong></li>
            <li className="pricing-item">90 Minutes = <strong>185 SR</strong></li>
            <li className="pricing-item">120 Minutes = <strong>240 SR</strong></li>
          </ul>
        </div>

        {/* Policies Section */}
        <div className="policies-section">
          <button
            className="policies-button"
            onClick={() => setShowPolicies(!showPolicies)}
          >
            {showPolicies ? "Hide Policies" : "View Policies"}
          </button>
          {showPolicies && (
            <div className="policies-details">
              <h3>Replacement and Refund Policy</h3>
              <ul>
                <li>
                  In case you want to cancel your reservation, you must notify us
                  at least 2 hours before the scheduled reservation time to receive a refund.
                </li>
                <li>
                  If the client does not arrive within 20 minutes of the scheduled reservation
                  time, the reservation will be cancelled and the payment will not be refunded.
                </li>
                <li>
                  Rescheduling the reservation to another day is allowed without a refund.
                </li>
                <li>There will be no refund if the client does not show up.</li>
              </ul>
            </div>
          )}
        </div>

        {/* Gaming Room Section */}
        <div className="gaming-room-section">
          <h3 className="gaming-room-title">Gaming Room</h3>
          <div className="gaming-room-gallery">
            <img src={jakaroo} alt="Jakaroo" className="gaming-room-image" />
            <img src={baloot} alt="Baloot" className="gaming-room-image" />
            <img src={playstation} alt="PlayStation" className="gaming-room-image" />
            <img src={otherGames} alt="Other Games" className="gaming-room-image" />
          </div>
        </div>

        {/* Embedded Google Map */}
        <div className="map-container">
          <iframe
            className="google-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387.2659222869016!2d39.0935061!3d21.7557388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c163053b847bdf%3A0x10df9a3d61e06c3!2sPadel%20Point!5e0!3m2!1sen!2ssa!4v1697909922142!5m2!1sen!2ssa"
            width="100%"
            height="300"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Padel Point Location"
          ></iframe>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer-container">
        <p className="footer-text">
          © 2024 Padel Point. All rights reserved. | 
          <a href="#" className="footer-link">Privacy Policy</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
