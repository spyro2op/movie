const express = require('express');
const router = express.Router();
const { getMovies, createMovie, deleteMovie } = require('../controllers/movieController');

router.get('/', getMovies);
router.post('/', createMovie);
router.delete('/:id', deleteMovie);

module.exports = router;
