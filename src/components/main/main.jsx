import React from 'react';
import Filter from '../shared/filter/filter';
import MovieCard from '../shared/movie card/movie-card';
import Sort from '../shared/sort/sort';
import './main.css';

function MainComponent(props) {
  return (
    <>
      <div className="main">
        <div className="main__bar">
          <Filter onClick={props.filterMovies}/>
          <Sort onChange={props.sortMovies}/>
        </div>
        <div className="container">
        { props.moviesData.map((card, idx) => {
          // При мапе в каждый тег, который я возвращаю, добавлять проперти key - он должен быть уникальным!!!
            return <MovieCard movie={card} key={idx} />
        }) }
        </div>
      </div>
    </>
  );
}

export default MainComponent;
