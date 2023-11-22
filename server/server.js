import express from 'express'
import mongoose from 'mongoose';

const app = express();
app.use(express.json())

app.patch('/api/movie/:id', (req, res) => {
  const id = req.params._id
  console.log(id)
  Movie.findByIdAndUpdate(id)
    .then(updatedMovie => {
      
      console.log(updatedMovie)
    })
    .then(res.json(Movie.find()))

    .catch(err => {
      res.status(400).json({ succes: false })
      console.log(err)
    }
    )
})

mongoose.connect('mongodb+srv://BeerDuckMovie:iWuc1xT9wgFXAa9h@moviesprint.5b6u4qu.mongodb.net/')
  .then(() => { app.listen(4000, () => console.log('Server is opened on port 4000')) })