import React, {useState} from 'react';
import './search.css';

function SearchComponent(props) {
  const [value, setValue] = useState('');
  const getValue = (event) => setValue(event.target.value);
  const search = () => {
    props.searchMovies(value)
  }

  return (
    <div className="search">
      <label htmlFor=""></label>
      <input type="text" value={value} name="movieName" className="search__input" onChange={getValue}/>
      <button id="search__button" onClick={search}>Search</button>
    </div>
  );
}

export default SearchComponent;