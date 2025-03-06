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
            <Link to="/page-one">Page One</Link>
            <Link to="/page-two">Page Two</Link>
            <Link to="/page-three">Page Three</Link>
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
