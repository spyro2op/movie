const Movie = require('../models/Movie');

// 1. Get all movies (Screen 2: List Movies)
const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find().sort({ createdAt: -1 });
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 2. Create a new movie (Screen 1: Add Movie)
const createMovie = async (req, res) => {
  try {
    const { movieName, casting, releaseDate, director, producer } = req.body;

    // Validation
    if (!movieName || !casting || !releaseDate || !director || !producer) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const movie = await Movie.create({
      movieName: movieName.trim(),
      casting: casting.trim(),
      releaseDate,
      director: director.trim(),
      producer: producer.trim(),
    });

    res.status(201).json(movie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// 3. Delete a movie (Screen 2: Delete Movie)
const deleteMovie = async (req, res) => {
  try {
    const movie = await Movie.findByIdAndDelete(req.params.id);

    if (!movie) {
      return res.status(404).json({ message: 'Movie not found.' });
    }

    res.status(200).json({ message: 'Movie deleted successfully.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getMovies,
  createMovie,
  deleteMovie,
};
