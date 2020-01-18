import React, { useEffect, useState } from 'react';
import './App.css';
import { Movies } from './components/Movies';
import { MovieForm } from './components/MovieForm';
import { Container } from 'semantic-ui-react';

function App() {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/movies', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
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
