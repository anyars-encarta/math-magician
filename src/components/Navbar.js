import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../modules/Navbar.module.css';

function Navbar() {
  return (
    <div className={styles.navbar}>
      <h1 className={styles.header}>Encarta Math Magicians</h1>
      <nav>
        <li><NavLink className={styles.navLink} to="/">Home</NavLink></li>
        <li><NavLink className={styles.navLink} to="/calculator">Calculator</NavLink></li>
        <li><NavLink className={styles.navLink} to="/quote">Quote</NavLink></li>
      </nav>
    </div>
  );
}

export default Navbar;
