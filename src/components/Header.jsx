import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Optional: close menu when clicking a link (good UX on mobile)
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header>
      <div className="header-container">
        <div className="logo-area">
          <i className="fa-solid fa-hand-holding-medical logo-icon"></i>

          <div className="logo-text">
            <div className="hospital-name">VIGNAN HOSPITAL</div>
            <div className="tagline">"Your Health, Our Priority"</div>
          </div>
        </div>

        {/* Hamburger button - visible only on mobile */}
        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"}`}></i>
        </button>

        {/* Navigation links */}
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li>
            <a href="/" className="active" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#" onClick={closeMenu}>
              About Us
            </a>
          </li>
          <li>
            <a href="#" onClick={closeMenu}>
              Services
            </a>
          </li>
          <li>
            <a href="/products" onClick={closeMenu}>
              Products
            </a>
          </li>
          <li>
            <a href="#" onClick={closeMenu}>
              Rental Equipments
            </a>
          </li>
          <li>
            <a href="#" onClick={closeMenu}>
              Careers
            </a>
          </li>
          <li>
            <a href="#" onClick={closeMenu}>
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
