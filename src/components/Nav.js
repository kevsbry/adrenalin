import React, { useRef } from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "./style.module.css";
import adrenalin from "../assets/adrenalin.svg";
import { Link } from "react-router-dom";

const Nav = () => {
  const nav = useRef();
  const unList = useRef();
  const onClickMenu = () => {
    nav.current.classList.add(styles.move);
    unList.current.classList.add(styles.active);
  };

  const closeMenu = () => {
    nav.current.classList.remove(styles.move);
    unList.current.classList.remove(styles.active);
  };

  return (
    <nav ref={nav} className={styles.nav}>
      <Link className={styles.logo} to="/">
        <img src={adrenalin} alt="logo" />
      </Link>

      <ul ref={unList} className={styles.g}>
        <li>culture</li>
        <li>work</li>
        <li>clients</li>
        <li>services</li>
        <li>careers</li>
        <li>contact</li>
        <Icon
          onClick={closeMenu}
          className={styles["close-icon"]}
          icon={faTimes}
        />
      </ul>
      <Icon
        onClick={onClickMenu}
        className={styles["menu-icon"]}
        icon={faBars}
      />
    </nav>
  );
};

export default Nav;
