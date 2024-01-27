// Import necessary libraries and icons
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/Navbar.css";
import wpsLogo from "../Images/logo.png";

function Navbar() {
  const navRef = useRef();
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Toggle the navigation menu
  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Close the navigation menu
  const closeNavbar = () => {
    setIsNavOpen(false);
  };

  return (
    <div>
      <div className="nav-email-link">
        <a href="mailto:info@precisionworks.ca">info@precisionworks.ca</a>
      </div>
      <header>
        <div className="nav-logo">
          <img src={wpsLogo} alt="use alt text" />
        </div>
        {/* Navigation Links */}
        <nav ref={navRef} className={isNavOpen ? "nav-open" : ""}>
          <Link to="/" onClick={closeNavbar}>
            Home
          </Link>
          <Link to="/services" onClick={closeNavbar}>
            Services
          </Link>
          <Link to="/capabilities" onClick={closeNavbar}>
            Capabilities
          </Link>
          <Link to="/industries" onClick={closeNavbar}>
            Industries We Serve
          </Link>
          <Link to="/contact" onClick={closeNavbar}>
            Contact Us
          </Link>
          {/* Close Button */}
          <button className="nav-btn nav-close-btn" onClick={toggleNavbar}>
            <FaTimes />
          </button>
        </nav>
        {/* Hamburger Menu Button */}
        <button className="nav-btn" onClick={toggleNavbar}>
          <FaBars />
        </button>
      </header>
    </div>
  );
}

export default Navbar;
