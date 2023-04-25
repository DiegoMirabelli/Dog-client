import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/LandingPage.module.css";
import github from "../styles/img/github.png";
import linkedin from "../styles/img/Linkedin-logo.png";
import logo from "../styles/img/boton.png";
import LandingCard from "../component/LandingCard";
import { useDispatch, useSelector } from "react-redux";
import { getDogs } from "../store/actions";

const LandingPage = () => {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs);
  const [randomDog, setRandomDog] = useState(null);

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  useEffect(() => {
    if (allDogs.length > 0) {
      const randomIndex = Math.floor(Math.random() * allDogs.length);
      setRandomDog(allDogs[randomIndex]);
    }
  }, [allDogs]);

  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowCard(true);
    }, 750); 
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={styles.all}>
      {/* fondo----> */}
      <div className={styles.background}></div>
      <div className={styles.image}></div>
      {/* fondo----< */}
      <div className={styles.bienvenida}>
        <div className={styles.header}>
          <h1>PI-Dogs</h1>
        </div>
        <Link to="/home">
          <button>Enter</button>
        </Link>
      </div>

      <div className={styles.logoPrincipal}>
        <img className={styles.logo} src={logo} alt="logo"></img>
      </div>
      
      {showCard && (
        <div className={styles.landingCardContainer}>
          <LandingCard dog={randomDog} />
          <p className={styles.eslogan}>Explore canine diversity on our list and discover the perfect companion for you.</p>
        </div>
        
      )}

      <div className={styles.chuleta}>
        <img src={github} alt="logo-github"></img>
        <h1>
          <a
            href="https://github.com/DiegoMirabelli"
            target="_blank"
            rel="noreferrer"
          >
            DiegoMirabelli‎ ‎ ‎ ‎{" "}
          </a>
        </h1>

        <img src={linkedin} alt="logo-github"></img>
        <h1>
          <a
            href="https://www.linkedin.com/in/diego-mirabelli-217656250/"
            target="_blank"
            rel="noreferrer"
          >
            Mirabelli Diego
          </a>
        </h1>
      </div>
    </div>
  );
};

export default LandingPage;
