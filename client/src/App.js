import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom'
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };
  console.log(movieList)
  return (
    <div>
      {/* <Link to='/'>Home</Link> */}
      
      <SavedList list={[ /* This is stretch */]} />
      <Switch>
      <Route path='/movies/:id'>
          <Movie/>
        </Route>

        <Route path='/'>
          <MovieList movieList={movieList}/>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
