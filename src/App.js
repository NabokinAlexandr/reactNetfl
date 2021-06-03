import './App.css';
import HeaderComponent from './components/header/header';
import MainComponent from './components/main/main';
import FooterComponent from './components/footer/footer';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from './redux/actions/movies.actions';

function App() {
  const dispatch = useDispatch();
  const allMovies = useSelector((state) => state.movies.movieList);
  const [moviesData, setMoviesData] = useState(allMovies);

  function getMovies() {
    dispatch(fetchMovies());
  }
  function setMoviesToState(movies) {
    setMoviesData(movies);
  }
  
  useEffect(getMovies, []);
  useEffect(
    function() {
      setMoviesToState(allMovies);
    }, 
    [allMovies]
  )
  
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

  function searchMovies(value) {
    const result = allMovies.filter(function(element) {
      if(element.title.toLocaleLowerCase() === value.toLocaleLowerCase()) {
        return element
      }
    });
    setMoviesData(result);
  }

  return (
    <div className="App">
      <HeaderComponent searchMovies={searchMovies} />
      <MainComponent moviesData={moviesData} filterMovies={filterMovies} sortMovies={sortMovies} />
      <FooterComponent />
    </div>
  );
}

export default App;
