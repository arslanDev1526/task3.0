// import React,{useState} from 'react'
import './nav.css';

import React, { useState } from 'react';

function Nav() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const closeMenu = () => {
    setIsActive(false);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <a href="#" className="nav-logo">Smoothie</a>
        <ul className={`nav-menu ${isActive ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="#" className="nav-link" >Home</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link" >About</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Menu</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link" >Contact</a>
          </li>
        </ul>
        <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
