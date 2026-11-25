import React, { useState } from 'react';
import { createMovie } from '../services/api';

export default function MovieForm({ onMovieCreated, onSwitchToList }) {
  const [formData, setFormData] = useState({
    movieName: '',
    casting: '',
    releaseDate: '',
    director: '',
    producer: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission with validations
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const { movieName, casting, releaseDate, director, producer } = formData;

    // Validations
    if (!movieName.trim()) return setError('Movie Name is required.');
    if (!casting.trim()) return setError('Casting (actor/actress names) is required.');
    if (!releaseDate) return setError('Release Date is required.');
    if (!director.trim()) return setError('Director name is required.');
    if (!producer.trim()) return setError('Producer name is required.');

    try {
      setLoading(true);
      const res = await createMovie(formData);

      setSuccess(`Movie "${res.data.movieName}" saved successfully in database!`);
      setFormData({ movieName: '', casting: '', releaseDate: '', director: '', producer: '' });

      if (onMovieCreated) {
        onMovieCreated(res.data);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to save movie to database.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <h2>Create Movie</h2>
        <p>Fill out the form below to add a movie to the database.</p>
      </div>

      {error && <div className="alert error">{error}</div>}
      {success && (
        <div className="alert success">
          <span>{success}</span>
          <button type="button" className="btn-link" onClick={onSwitchToList}>
            View Movies List →
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Movie Name *</label>
          <input
            type="text"
            name="movieName"
            placeholder="e.g. Ramayana"
            value={formData.movieName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Casting (Actors, Actresses) *</label>
          <input
            type="text"
            name="casting"
            placeholder="e.g. Ranbir Kapoor, Sai Pallavi "
            value={formData.casting}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Release Date *</label>
          <input
            type="date"
            name="releaseDate"
            value={formData.releaseDate}
            onChange={handleChange}
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Director *</label>
            <input
              type="text"
              name="director"
              placeholder="e.g. Nitesh Tiwari"
              value={formData.director}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Producer *</label>
            <input
              type="text"
              name="producer"
              placeholder="e.g. Namit Malhotra"
              value={formData.producer}
              onChange={handleChange}
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Saving...' : '💾 Submit & Save Movie'}
        </button>
      </form>
    </div>
  );
}
