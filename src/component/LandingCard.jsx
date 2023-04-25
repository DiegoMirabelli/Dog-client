import React from "react";
import styles from "../styles/landingCard.module.css";

const DogCard = ({ dog }) => {
  if (!dog) {
    return <div>No se encontró información del perro</div>;
  }
  return (
    <div className={styles.all}>
      <div className={styles.cardContainer}>
        <h2 className={styles.title}>{dog.name}</h2>
        <div>
          <img src={dog.image} alt={dog.name} height="550px" width="500px" />
          <div className={styles.cardInfo}>
            <p>Weight range: {dog.weight} kg</p>
            <p>Temperaments: {dog.temperaments.join(", ")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DogCard;
