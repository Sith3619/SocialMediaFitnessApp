import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import "./header.css";

function Header() {
  const navigate = useNavigate();

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
        <div className="dropdown">
          <button className="dropbtn">Menu</button>
          <div className="dropdown-content">
            <Link to="/">Home</Link>
            <Link to="/page-two">Profile</Link>
            <Link to="/settings">Settings</Link>
            <Link to="/privacy-controls">Privacy Controls</Link>
            <Link to="/custom-workouts">Workout Plans</Link>
            <Link to="/page-one">TempBlank</Link>
            <Link to="/page-three">Trackers</Link>
            <Link to="/leaderboard">Leaderboard</Link>
            <Link to="/health-calculator">Health Calculator</Link>
          </div>
        </div>
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>
    </header>
  );
}

export default Header;
