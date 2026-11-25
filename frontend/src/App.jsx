import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import MovieForm from './components/MovieForm';
import MovieList from './components/MovieList';
import { getMovies, deleteMovie } from './services/api';
import './App.css';

export default function App() {
  const [activeScreen, setActiveScreen] = useState('list'); // 'list' | 'create'
  const [movies, setMovies] = useState([]);
  const [message, setMessage] = useState('');

  // 1. Fetch movies from backend
  const fetchMovies = async () => {
    try {
      const res = await getMovies();
      setMovies(res.data);
    } catch (err) {
      console.error('Failed to load movies:', err.message);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  // 2. Add newly created movie to state
  const handleMovieCreated = (newMovie) => {
    setMovies([newMovie, ...movies]);
  };

  // 3. Delete movie and clear from screen state
  const handleDeleteMovie = async (id, movieName) => {
    try {
      await deleteMovie(id);
      // Once movie is deleted, that movie name is cleared and only available movies remain
      setMovies(movies.filter((movie) => movie._id !== id));
      setMessage(`Movie "${movieName}" deleted successfully.`);
      setTimeout(() => setMessage(''), 3000);
    } catch (err) {
      alert('Error deleting movie from database.');
    }
  };

  return (
    <div className="app">
      <Navbar
        activeScreen={activeScreen}
        setActiveScreen={setActiveScreen}
        movieCount={movies.length}
      />

      <main className="container">
        {message && <div className="alert info">{message}</div>}

        {activeScreen === 'create' ? (
          <MovieForm
            onMovieCreated={handleMovieCreated}
            onSwitchToList={() => setActiveScreen('list')}
          />
        ) : (
          <MovieList
            movies={movies}
            onDeleteMovie={handleDeleteMovie}
            onSwitchToCreate={() => setActiveScreen('create')}
          />
        )}
      </main>
    </div>
  );
}
