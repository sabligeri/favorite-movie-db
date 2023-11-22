import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const movieUrl = process.env.MOVIE_DB;

mongoose.connect(movieUrl)
  .then(() =>
    app.listen(3000, () => console.log('Server started on port 3000'))
  )

