import React from 'react';
import './search.css';;

function SearchComponent(props) {
  return (
    <div className="search">
      <input type="text" className="search__input"/>
      <button className="search__button">Search</button>
    </div>
  );
}

export default SearchComponent;