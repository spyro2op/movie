# 🎬 Movie Management System (MERN)

A clean and simple MERN stack application to create, view, and delete movies in a database.

---

## 🏛️ Flow Diagram

```text
Website (React :3000) ◄─── REST API (JSON) ───► Backend (Express :5000) ◄─── Mongoose ───► Database (MongoDB :27017)
```

---

## 🚀 Quick Start

1. Ensure MongoDB is running locally.
2. Run the full application with a single command:

```bash
npm run dev
```

* **Frontend UI**: [http://localhost:3000](http://localhost:3000)
* **Backend API**: [http://localhost:5000](http://localhost:5000)

---

## 📱 Application Screens

* **Screen 1 (Add Movie)**:
  * Input fields: Movie Name, Casting (actor/actress names), Release Date, Director, and Producer.
  * Form validation ensures no empty submissions.
  * Saves data directly into MongoDB on submit.

* **Screen 2 (View Movies)**:
  * Displays all created movies with their details.
  * Delete button to remove any movie.
  * Once deleted, the movie is cleared from the screen and only available movies are shown.

---

## 📡 REST API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/movies` | Fetch all movies (sorted newest first) |
| `POST` | `/api/movies` | Create and save a new movie |
| `DELETE` | `/api/movies/:id` | Delete a movie by ID |

---

## 📁 Project Structure

```text
Movie/
├── backend/
│   ├── config/db.js          # MongoDB connection
│   ├── controllers/          # getMovies, createMovie, deleteMovie
│   ├── models/Movie.js       # Mongoose schema
│   ├── routes/movieRoutes.js # Express router
│   ├── .env                  # Port & DB config
│   └── server.js             # Express app entry
├── frontend/
│   ├── src/
│   │   ├── components/       # Navbar, MovieForm, MovieList
│   │   ├── services/api.js   # Axios API client
│   │   ├── App.jsx           # Central state & screen switcher
│   │   └── App.css           # Clean, responsive styles
│   └── package.json
├── package.json              # Root script ("npm run dev")
└── README.md
```
