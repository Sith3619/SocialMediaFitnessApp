import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; 2025 Social Media Fitness App</p>
        <div className="footer-links">
          <Link to="/about-us">About Us</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
