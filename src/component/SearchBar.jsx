import { useState } from 'react';
import styles from '../styles/SearchBar.module.css'
import { useDispatch } from "react-redux";
import {getByName} from '../store/actions'

function SearchBar({setCurrentPage}) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [dogData, setDogData] = useState(null);
  const [query, setQuery] = useState('');

  // const handleQueryChange = (event) => {
  //   setQuery(event.target.value);
  //   setCurrentPage(1);
  // };

  function handleInputChange(e) {
    setName(e.target.value);
  }

 function handleSubmit(e) {
    e.preventDefault();
    if (name) {
      dispatch(getByName(name));
      setName("");
      setCurrentPage(1);
    }
  }
  return (
    <div className={styles.searchBar}>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={handleInputChange}
        placeholder="Search breed..."
      />
      </form>
      <button>Buscar</button>
    </div>
  );
}

export default SearchBar;
