import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import "./header.css";

function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
        console.log("Logout Successful");
      })
      .catch((error) => {
        console.error("Logout Error: ", error);
      });
  };

  return (
    <header>
      <h1>
        <Link to="/" className="header-link">
          FLEXCORP
        </Link>
      </h1>
      <div className="header-right">
        {/* <button className="menu-btn" onClick={handleMenuToggle}>
          ☰
        </button> */}
        <nav className={`header-nav ${menuOpen ? "show" : ""}`}>
          <Link to="/" className="header-button">
            Home
          </Link>
          <Link to="/profile" className="header-button">
            Profile
          </Link>
          <Link to="/settings" className="header-button">
            Settings
          </Link>
          <Link to="/health-calculator" className="header-button">
            BMI/BMR
          </Link>
          <Link to="/custom-workouts" className="header-button">
            Workouts
          </Link>
          <Link to="/trackers" className="header-button">
            Trackers
          </Link>
          <button onClick={handleLogout} className="header-button logout-btn">
            Logout
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
