import React from "react";
import "../components/Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="container">
        <div className="navbar-container">
          <div className="logo">
            <img src="logo.svg" alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
