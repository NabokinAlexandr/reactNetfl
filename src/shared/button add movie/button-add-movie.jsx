import React from 'react';
import './button-add-movie.css'

function ButtonAddMovieComponent(props) {
  return (
    <>
      <button className="button__add_movie" onClick={props.onClick}>Add movie</button>
    </>
  );
}

export default ButtonAddMovieComponent;