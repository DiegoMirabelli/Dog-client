import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/navBar.module.css";
import logo from "../styles/img/boton.png";
import SearchBar from "./SearchBar";
import menu from "../styles/img/menu.png";
import Filters from "./Filters";

const NavBar = ({ setCurrentPage }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav
        className={`${styles.nav} ${
          showMenu ? styles.menuOpen : styles.menuClosed
        }`}
      >
        <Link to="/home">
          <img className={styles.logo} src={logo} alt="logo" />
        </Link>

        <h1>PI-Dogs</h1>
        <SearchBar setCurrentPage={setCurrentPage} />

        <button className={styles.btnMenu} onClick={handleMenuClick}>
          <img className={styles.menu} src={menu} alt=""></img>
        </button>
      </nav>
      <div className={styles.menuContainer}>
        <ul className={styles.menuList}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/createDog">
              <button>Crate Dog</button>
            </Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div>
          <Filters setCurrentPage={setCurrentPage} />
        </div>
        <div></div>
      </div>
    </>
  );
};

export default NavBar;
