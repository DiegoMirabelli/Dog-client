import React, { useEffect, useState } from "react";
import NavBar from "../component/navBar";
import DogsCard from "../component/dogsCard";
import { useDispatch, useSelector } from "react-redux";
import { getDogs } from "../store/actions";
import styles from "../styles/Home.module.css";
import { Link } from "react-router-dom";
import Pagination from "../component/Pagination";


const Home = () => {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs);
  const [currentPage, setCurrentPage] = useState(1);
  const [DogPerPage, setDogPerPage] = useState(8);
  const indexLastDog = currentPage * DogPerPage;
  const indexFirstDog = indexLastDog - DogPerPage;

  const currentDog = allDogs.slice(indexFirstDog, indexLastDog);
  //para setear la pagina en ese numero de pagina. Helps with rendering
  const paging = (pageNumber) => {
    setCurrentPage(pageNumber);
  };



  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      <NavBar setCurrentPage={setCurrentPage} currentDog={currentDog}/>
      
      <div className={styles.containerCards}>
      
        {currentDog.length === 0 ? (
          <img className={styles.image} alt="No hay perritos"></img>
        ) : (
          currentDog.map((c) => {
            return (
              <div className={styles.cardFormat} key={c.id}>
                <Link className={styles.name} to={"/dogs/" + c.id}>
                  <DogsCard
                    name={c.name}
                    image={c.image}
                    weight={c.weight}
                    temperaments={c.temperaments}
                  />
                </Link>
              </div>
            );
          })
        )}
      </div>
      
      <div>
        <Pagination
          currentPage={currentPage}
          paging={paging}
          //aca es donde se usa allDogs
          totalPages={Math.ceil(allDogs.length / DogPerPage)} 
        />
      </div>
    </div>
  );
};

export default Home;
