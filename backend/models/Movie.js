const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema(
  {
    movieName: {
      type: String,
      required: true,
      trim: true,
    },
    casting: {
      type: String,
      required: true,
      trim: true,
    },
    releaseDate: {
      type: Date,
      required: true,
    },
    director: {
      type: String,
      required: true,
      trim: true,
    },
    producer: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Movie', movieSchema);
