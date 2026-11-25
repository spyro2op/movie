import React from 'react';

export default function Navbar({ activeScreen, setActiveScreen, movieCount }) {
  return (
    <header className="navbar">
      <div className="nav-container">
        <h2>🎬 Movie Management</h2>
        <div className="nav-buttons">
          <button
            className={`nav-btn ${activeScreen === 'create' ? 'active' : ''}`}
            onClick={() => setActiveScreen('create')}
          >
            ➕ Add Movie
          </button>
          <button
            className={`nav-btn ${activeScreen === 'list' ? 'active' : ''}`}
            onClick={() => setActiveScreen('list')}
          >
            📋 View Movies ({movieCount})
          </button>
        </div>
      </div>
    </header>
  );
}
