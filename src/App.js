import React, { useEffect } from 'react';
import './App.css';

function App() {

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
          console.log(data)
        })
      )
  }, [])

  return <div className="App" />


}

export default App;
