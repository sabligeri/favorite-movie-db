import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import MovieList from "./model/movieSchema.js";

dotenv.config();

const app = express();
app.use(express.json());

const movieUrl = process.env.MOVIE_DB;

app.post('/api/favmovies', (req, res) => {
  const poster = req.body.poster;
  const title = req.body.title;
  const year = req.body.year;
  const seen = 'unseen';
  const comment = '';
  const movieList = new MovieList({
    poster,
    title,
    year,
    seen,
    comment,
  });
  movieList.save()
      .then(movies => res.json(movies))
      .catch(err => res.status(400).json({ success: false }));
});

app.get('/api/favmovies', (req, res) => {
  MovieList.find()
        .then(movies => res.json(movies))
        .catch(err => res.status(400).json({ success: false, error: err }));
})

app.delete('/api/favmovies', (req, res) => {
  const id = req.body.id
  MovieList.findByIdAndDelete(id)
    .then(movies => res.json(movies))
    .catch(err => res.status(400).json({ success: false, error: err }))
})

mongoose.connect(movieUrl)
  .then(() =>
    app.listen(3000, () => console.log('Server started on port 3000'))
  )
