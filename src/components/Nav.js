import React from "react";
import styles from "./style.module.css";
import adrenalin from "../assets/adrenalin.svg";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Link className={styles.logo} to="/adrenalin">
        <img src={adrenalin} alt="logo" />
      </Link>

      <ul>
        <li>culture</li>
        <li>work</li>
        <li>clients</li>
        <li>services</li>
        <li>careers</li>
        <li>contact</li>
      </ul>
    </nav>
  );
};

export default Nav;
