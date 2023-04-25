import React from "react";
import styles from "../styles/cardComponent.module.css";

const DogsCard = ({ name, image, temperaments, weight }) => {
  return (
    <div className={styles.all}>
      <div className={styles.cardContainer}>
        <h2 className={styles.title}>{name}</h2>
        <div>
          <img src={image} height="300px" width="275px" />
          <div className={styles.cardInfo}>
            <p>Weight range {weight} kg</p>
            <p>Temperaments: {temperaments.join(", ")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DogsCard;
