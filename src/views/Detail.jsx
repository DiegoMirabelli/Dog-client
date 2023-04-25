import React, { useEffect } from "react";
import styles from "../styles/detail.module.css";
import NavBar from "../component/navBar";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../store/actions";
import { useParams } from "react-router-dom";

const Detail = () => {
  const dispatch = useDispatch();
  const DogDeits = useSelector((state) => state.dogDetail);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      <NavBar></NavBar>

      <div className={styles.detailContainer}>

        {Object.keys(DogDeits).length > 0 ? (
          <div className={styles.Detail}>
            <div>
              <h4 className={styles.detailName}>{DogDeits.name}</h4>
            </div>
            <div>
              <img
                className={styles.imagen}
                src={DogDeits.image}
                alt={DogDeits.name}
                width="200"
                height="150"
              />
            </div>
            <div>
              <div className={styles.stats}>
                <span>Id: {DogDeits.id}</span>
                <span>Nombre: {DogDeits.name}</span>
                <span>Peso: {DogDeits.weight}</span>
                <span>Altura: {DogDeits.height}</span>
                
                {DogDeits.createdInDb ? (
                  <span>Temperamentos: {DogDeits.temperaments}</span>
                ) : (
                  <span>Temperamentos: {DogDeits.temperament}</span>
                )}
                <span>Años de vida: {DogDeits.life_span}</span>
              </div>
            </div>
          </div>
        ) : (
          <p className={styles.pCasi}>YA CASI</p>
        )}
      </div>
    </div>
  );
};

export default Detail;
