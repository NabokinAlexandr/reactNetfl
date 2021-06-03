import './App.css';
import HeaderComponent from './header/header';
import MainComponent from './main/main';
import FooterComponent from './footer/footer';
import React, {useState} from 'react';
import allMovies from './mock/mock';


function App() {

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

  function searchMovies(value) {
    const result = allMovies.filter(function(element) {
      if(element.title.toLocaleLowerCase() === value) {
        return element
      }
      //return value === 'all' ? a : a.genre.toLocaleLowerCase() === value;
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
