import React, { useEffect, useState } from 'react';
/* 
useEffect 
-Effect Hook lets you perform side effects in function components
-similar to componentDidMount and componentDidUpdate
-tell React that your component needs to do something after render
-Unlike componentDidMount or componentDidUpdate, effects scheduled with useEffect don’t block the browser from updating the screen
*/
import './App.css';
import { Movies } from './components/Movies';
import { MovieForm } from './components/MovieForm';
import { Container } from 'semantic-ui-react';

const App = () => {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    // fetch() allows you to make network requests similar to XMLHttpRequest (XHR). The main difference is that the Fetch API uses Promises
    fetch('http://localhost:5000/movies', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      // allows communication bewteen sevrer and web apps 
      mode: 'cors'
    })
      .then(response => response.json()
        .then(data => {
          setMovies(data.movies)
        })
      )
  }, [])

  return (
    <div className="App">
      <Container style={{ marginTop: 40 }}>
        <MovieForm onNewMovie={movie => setMovies(currentMovies => [movie, ...currentMovies])} />
        <Movies movies={movies} />
      </Container>
    </div>
  )
}

export default App;
