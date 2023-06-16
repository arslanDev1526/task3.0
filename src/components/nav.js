import styles from "./nav.module.css";

import React, { useState } from 'react';

function Nav() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
    console.log("i am clicked")
    
  };

  const closeMenu = () => {
    setIsActive(false);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <a href="#" className={styles["nav-logo"]}>Smoothie</a>
        <ul className={`${styles["nav-menu"]} ${isActive ? styles.active : ''}`}>
          <li className={styles["nav-item"]}>
            <a href="#" className={styles["nav-link"]} >Home</a>
          </li>
          <li className={styles["nav-item"]}>
            <a href="#" className={styles["nav-link"]} >About</a>
          </li>
          <li className={styles["nav-item"]}>
            <a href="#" className={styles["nav-link"]}>Menu</a>
          </li>
          <li className={styles["nav-item"]}>
            <a href="#" className={styles["nav-link"]} >Contact</a>
          </li>
        </ul>
        <div className={`${styles.hamburger} ${isActive ? 'active' : ' '}`} onClick={toggleMenu}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
