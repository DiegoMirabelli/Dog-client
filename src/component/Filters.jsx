import { useDispatch, useSelector } from "react-redux";
import {
  orderBy,
  filterTemperament,
  getTemperaments,
  filterBy,
} from "../store/actions";
import { useState, useEffect } from "react";
import styles from "../styles/filters.module.css";

export default function Filters({ setCurrentPage }) {
  const dispatch = useDispatch();
  const [_,setState] = useState("");
  const temperaments = useSelector((state) => state.temperaments);

  console.log(_)

  //ordeno los temperamnts de a-z
  const temperamentsOrder = temperaments.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });

  //filtro para los perros que vienen de la api o creados
  function handleFilter(e) {
    e.preventDefault();
    dispatch(filterBy(e.target.value));
  }

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);
  //filtro pa los temperamentos
  function onFilterTemperament(e) {
    e.preventDefault();
    dispatch(filterTemperament(e.target.value));
  }
  //filtro para ordenar de la a-z y por peso
  const handleSort = (e) => {
    e.preventDefault();
    dispatch(orderBy(e.target.value));
    setState(e.target.value);
    setCurrentPage(1);
  };

  return (
    <>
      <div className={styles.filtersContainer}>
      <h1>Sort by</h1>
        <select className={styles.filters} onChange={(e) => handleSort(e)}>
          <option value="" disabled selected>
          Sort alphabetically
          </option>
          <option value="ascendente">A-Z</option>
          <option value="descendente">Z-A</option>
          <option value="mayor">Higher Weight</option>
          <option value="menor">Lower Weight</option>
        </select>
        <div>
          <select className={styles.filters} onChange={onFilterTemperament}>
            <option
              value="All Temperaments"
              key="All Temperaments"
              disabled
              selected
            >
              Sort by Temperaments
            </option>
            {temperamentsOrder.map((el, index) => (
              <option value={el.name} key={index}>
                {el.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select className={styles.filters} onChange={(e) => handleFilter(e)}>
            <option value="" disabled selected>
              Sort by Created/API
            </option>
            <option value="All">All</option>
            <option value="api">API</option>
            <option value="Created">Created</option>
          </select>
        </div>
      </div>
    </>
  );
}