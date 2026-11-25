import axios from 'axios';

const API_URL = 'http://localhost:5000/api/movies';

export const getMovies = () => axios.get(API_URL);
export const createMovie = (data) => axios.post(API_URL, data);
export const deleteMovie = (id) => axios.delete(`${API_URL}/${id}`);
