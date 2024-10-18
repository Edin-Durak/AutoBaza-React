import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`nav-bar ${isMenuOpen ? "active" : ""}`}>
      <div className="nav-content">
        <a href="#">AutoBaza.ba</a>
        <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <a href="#" className="nav-link">
            O nama
          </a>
          <a href="#" className="nav-link">
            Kontakt
          </a>
        </div>
        <a href="#" className="hamburger-menu-icon" onClick={toggleMenu}>
          <img src="../public/images/hamburger-menu.png" alt="hamburger-menu" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
