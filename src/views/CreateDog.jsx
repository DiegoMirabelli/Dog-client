import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs, getTemperaments } from "../store/actions";
import styles from "../styles/Create.module.css";
import { Link } from "react-router-dom";
import NavBar from "../component/navBar";
const CreateDog = () => {
  const tempForm = useSelector((state) => state.temperaments);
  const dispatch = useDispatch();
  const [create, setCreate] = useState(false);

  const initialState = {
    name: "",
    heightmin: "",
    heightmax: "",
    weightmin: "",
    weightmax: "",
    life_spanmin: "",
    life_spanmax: "",
    temperaments: [],
    image: "",
  };

  const [errors, setErrors] = useState({ form: "complete form" });
  const [completed, setCompleted] = useState(initialState);

  const finalForm = {
    name: completed.name,
    height: `${completed.heightmin} - ${completed.heightmax}`,
    weight: `${completed.weightmin} - ${completed.weightmax}`,
    life_span: `${completed.life_spanmin} - ${completed.life_spanmax} years`,
    temperament: completed.temperaments.map((item) => item.name),
    image: completed.image,
  };

  useEffect(() => {
    if (tempForm.length === 0) return dispatch(getTemperaments());
  }, [tempForm.length, dispatch]);

  //<-------------VALIDATE------------------------>
  const validate = (completed) => {
    let errors = {};
    if (!completed.name) {
      errors.name = "Dog name is required";
    }
    if (completed.name.length < 3) {
      errors.name = "Dog name must be at least 3 characters";
    }
    if (!completed.heightmin || !completed.heightmax) {
      errors.height = "Dog height is required";
    }
    //verifica si heightmax es menor o igual que el valor de heightmin

    if (parseInt(completed.heightmax) <= parseInt(completed.heightmin)) {
      errors.height = "Height-max must be higher than height-min";
    }

    if (!completed.weightmin || !completed.weightmax) {
      errors.weight = "Dog weight is required";
    }
    if (parseInt(completed.weightmax) <= parseInt(completed.weightmin)) {
      errors.weight = "Weight-max must be higher than weight-min";
    }
    if (!completed.life_spanmin || !completed.life_spanmax) {
      errors.life_span = "Life span is required";
    }
    if (parseInt(completed.life_spanmax) <= parseInt(completed.life_spanmin)) {
      errors.life_span = "Life span-max must be higher than life span-min";
    }
    if (completed.temperaments.length === 0) {
      errors.temperaments = "Temperaments are required";
    }
    if (completed.life_spanmax < 0 || completed.life_spanmin < 0) {
      errors.life_span = "The value must be greater than 0";
    }
    if (completed.weightmax < 0 || completed.weightmin < 0) {
      errors.weight = "The value must be greater than 0";
    }
    if (completed.heightmax < 0 || completed.heightmin < 0) {
      errors.height = "The value must be greater than 0";
    }
    if (completed.heightmax < 0 || completed.heightmin < 0 || completed.weightmax < 0 || completed.weightmin < 0 || completed.life_spanmax < 0 || completed.life_spanmin < 0) {
      errors.value = "All values must be greater than 0";
    }

    return errors;
  };


  const handleChange = (e) => {
    setCompleted({ ...completed, [e.target.name]: e.target.value });
    setErrors(
      validate({
        ...completed,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleTemperaments = (e) => {
    if (
      !completed.temperaments.includes(
        tempForm.find((item) => item.name === e.target.value)
      )
    ) {
      completed.temperaments.push(
        tempForm.find((item) => item.name === e.target.value)
      );
    }
    setErrors(
      validate({
        ...completed,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    if (!completed.name) alert("El nombre del perro es requerido");
    console.log(finalForm);
    e.preventDefault();
    const errors = validate(completed);
    setErrors(errors);

    if (Object.values(errors).length === 0) {
      axios.post("http://localhost:3001/dogs/createDog", finalForm);
      setCreate(!create);
      setCompleted(initialState);
    }
  };

  function handleDelete(name) {
    setCompleted({
      ...completed,
      temperaments: completed.temperaments.filter((item) => item.name !== name),
    });
  }

  return (
    <>
      <NavBar></NavBar>
      <section className={styles.back}>
        <div className={styles.overlay}></div>

        {/* se pasa como prop create para cambiar el estado de crear un perro a perro creado con exito */}
        <div className={styles.formContainer} create={create}>
          {!create ? (
            // si el estado create es falso dice crea sino perro creado
            <h2 className={styles.titulo}>CREATE YOUR DOG</h2>
          ) : (
            <h2>DOG HAS BEEN CREATED SUCCESSFULLY</h2>
          )}
          <div className={styles.form}>
            <div className={styles.label}>Name of your puppy:</div>

            {errors.belleza ? <label>{errors.belleza}</label> : null}
            <input
              type="text"
              name="name"
              autoComplete="off"
              value={completed.name}
              // actualiza el estado completed usando la funcion handleChange
              onChange={handleChange}
            />
            {errors.name ? <label>{errors.name}</label> : null}
            <br />
            <div className={styles.label}>Height:</div>
            <input
              type="Number"
              name="heightmin"
              className="number"
              placeholder="Height-Min"
              value={completed.heightmin}
              onChange={handleChange}
            />
            <input
              type="Number"
              name="heightmax"
              className="number"
              placeholder="Height-Max"
              value={completed.heightmax}
              onChange={handleChange}
            />
            {errors.height ? <label>{errors.height}</label> : null} <br />
            <div className={styles.label}>Weight:</div>
            <input
              type="Number"
              name="weightmin"
              className="number"
              placeholder="Weight-Min"
              value={completed.weightmin}
              onChange={handleChange}
            />
            <input
              type="Number"
              name="weightmax"
              className="number"
              placeholder="Weight-Max"
              value={completed.weightmax}
              onChange={handleChange}
            />
            {errors.weight ? <label>{errors.weight}</label> : null} <br />
            <div className={styles.label}>years of life:</div>
            <input
              name="life_spanmin"
              value={completed.life_spanmin}
              placeholder="Life Span-Min"
              type="Number"
              className="number"
              onChange={handleChange}
            />
            <input
              name="life_spanmax"
              value={completed.life_spanmax}
              placeholder="Life Span-Max"
              type="Number"
              onChange={handleChange}
            />
            {errors.life_span ? <label>{errors.life_span}</label> : null} <br />
            <div className={styles.label}>Image (url):</div>
            <input
              name="image"
              value={completed.image}
              placeholder="URL"
              type="text"
              onChange={handleChange}
              autoComplete="off"
            />
            <br />
            <p className={styles.label}>Temperament:</p>
            <select name="temperaments" onChange={handleTemperaments}>
              <option value="" disabled selected>
                Select
              </option>
              {tempForm?.map((item) => (
                <option value={item.name} key={item.id}>
                  {item.name}
                </option>
              ))}
            </select>{" "}
            {errors.temperaments ? <label>{errors.temperaments}</label> : null}
            <div className={styles.button} create={create}>
              {!create ? (
                <button
                  onClick={(e) => handleSubmit(e)}
                  className={styles.crear}
                  type="submit"
                >
                  Create
                </button>
              ) : (
                <Link
                  onClick={() => dispatch(getDogs())}
                  to="/home"
                  className={styles.regresar}
                >
                  RETURN TO HOME
                </Link>
              )}
            </div>
          </div>
          <div className={styles.temperaments}>
            {completed.temperaments?.map((item) => (
              <div key={item.id}>
                {item.name}{" "}
                <button onClick={() => handleDelete(item.name)}>x</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CreateDog;
