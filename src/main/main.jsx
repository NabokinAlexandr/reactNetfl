import React, {useState} from 'react';
import allMovies from '../mock/mock';
import Filter from '../shared/filter/filter';
import MovieCard from '../shared/movie card/movie-card';
import Sort from '../shared/sort/sort';
import './main.css';

function MainComponent(props) {
  const [moviesData, setMoviesData] = useState(allMovies);
  
  function byField(field) {
    return (a, b) => a[field] > b[field] ? -1 : 1;
  }

  function byDate(field) {
    return (a, b) => {
      return new Date(a[field]).getTime() > new Date(b[field]).getTime() ? -1 : 1
    }
  }

  function filterMovies(event) {
    const value = event.target.attributes.name.value;
    const result = allMovies.filter(function(element) {
      if(value === 'all') {
        return element
      }
      if(element.genre.toLocaleLowerCase() === value) {
        return element
      }
      //return value === 'all' ? a : a.genre.toLocaleLowerCase() === value;
    });
    setMoviesData(result);
  }
  
  function sortMovies(event) {
    const newMoviesData = [... moviesData];
    if(event.target.value === "relDate") {
      newMoviesData.sort(byDate('releaseDate'));
    } else if(event.target.value === "raiting") {
      newMoviesData.sort(byField('raiting'));
    }
    setMoviesData(newMoviesData); 
  }
  return (
    <>
      <div className="main">
        <div className="main__bar">
          <Filter onClick={filterMovies}/>
          <Sort onChange={sortMovies}/>
        </div>
        <div className="container">
        { moviesData.map((card, idx) => {
          // При мапе в каждый тег, который я возвращаю, добавлять проперти key - он должен быть уникальным!!!
            return <MovieCard movie={card} key={idx} />
        }) }
        </div>
      </div>
    </>
  );
}

export default MainComponent;
