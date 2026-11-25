import React from 'react';

export default function MovieList({ movies, onDeleteMovie, onSwitchToCreate }) {
  // Confirmation before delete
  const handleDelete = (id, movieName) => {
    if (window.confirm(`Are you sure you want to delete "${movieName}"?`)) {
      onDeleteMovie(id, movieName);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div>
      <div className="list-top">
        <div>
          <h2>Created Movies</h2>
          <p>Movies currently saved in the database.</p>
        </div>
        <button className="btn btn-primary" onClick={onSwitchToCreate}>
          ➕ Add Movie
        </button>
      </div>

      {movies.length === 0 ? (
        <div className="card empty-state">
          <h3>No Movies Found</h3>
          <p>No movies in the system yet. Click below to create your first movie.</p>
          <button className="btn btn-primary" onClick={onSwitchToCreate}>
            ➕ Add First Movie
          </button>
        </div>
      ) : (
        <div className="movie-grid">
          {movies.map((movie) => (
            <div key={movie._id} className="movie-card">
              <div className="movie-header">
                <h3>{movie.movieName}</h3>
                <span className="badge">📅 {formatDate(movie.releaseDate)}</span>
              </div>

              <div className="movie-info">
                <p><strong>🎭 Casting:</strong> {movie.casting}</p>
                <p><strong>🎬 Director:</strong> {movie.director}</p>
                <p><strong>💼 Producer:</strong> {movie.producer}</p>
              </div>

              <div className="movie-footer">
                <button
                  className="btn btn-delete"
                  onClick={() => handleDelete(movie._id, movie.movieName)}
                >
                  🗑️ Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
