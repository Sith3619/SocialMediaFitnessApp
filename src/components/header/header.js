import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import "./header.css";
import { FaCog, FaHome, FaCalculator, FaRegUser, FaRing, FaClipboardList } from "react-icons/fa";

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
          <FaHome style={{marginLeft: '-1rem', fontSize: 12}} /> Home
          </Link>
          <Link to="/profile" className="header-button">
          <FaRegUser style={{marginLeft: '-1rem', fontSize: 12}}/> Profile
          </Link>
          <Link to="/settings" className="header-button">
          <FaCog style={{marginLeft: '-1rem', fontSize: 12}}/> Settings
          </Link>
          <Link to="/health-calculator" className="header-button">
          <FaCalculator style={{marginLeft: '-1rem', fontSize: 12}} /> BMI/BMR
          </Link>
          <Link to="/custom-workouts" className="header-button">
          <FaRing style={{marginLeft: '-1rem', fontSize: 12}}/> Workouts
          </Link>
          <Link to="/trackers" className="header-button">
          <FaClipboardList style={{marginLeft: '-1rem', fontSize: 12}} /> Trackers
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
