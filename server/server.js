import mongoose from 'mongoose';
import express from "express";
import Movies from './model/movieSchema.js';

const app = express();
app.use(express.json());

app.get('URL' ,(req, res) => {
    Movies.find()
    .then(movies => res.json(movies))
    .catch(err => res.status(400).json({ success: false, error: err }));
})

app.post('URL', (req, res) => {
    const poster = req.body.poster;
    const title = req.body.title;
    const year = req.body.year;
    const seen = 'unseen';
    const comment = '';
    const favMovies = new TodoList({
        poster,
        title,
        year,
        seen,
        comment,

    });
    favMovies.save()
        .then(movies => res.json(movies))
        .catch(err => res.status(400).json({ success: false }));
});



mongoose.connect('mongodb+srv://username:password@moviesprint.5b6u4qu.mongodb.net/favouriteMovies')
.then(() => app.listen(3000, () => console.log('Server started on port 3000')) )
