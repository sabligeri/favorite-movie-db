import { useEffect, useState } from "react";
import DeleteVerify from "./DeleteVerify";

function MyFavorites() {

  const [favMovies, setFavMovies] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState(null);

  const deleteMovie = (id) => {
    return fetch(`/api/favmovies/${id}`, { method: "DELETE" }).then((res) =>
      res.json())
      .then(setFavMovies((favMovies) => {
        return favMovies.filter((favMovie) => favMovie._id !== id);
      }))
      .then(setShowModal(false))
  };

    useEffect(() => {
    fetch('/api/favmovies')
      .then(res => res.json())
      .then(favMovies => setFavMovies(favMovies))
      .catch(error => console.log(error))
 }, []);

  return (
    <>
      <h1> My favorite movies </h1>
            {(showModal === true) ? (
              <DeleteVerify deleteMovie={() => deleteMovie(id)} closeModal={setShowModal}/>) : (null)
            }
      <table>
        <tbody>
          <tr>
            {favMovies.map(movie => (
              <th key={movie._id}>
                <img src={(movie.poster !== 'N/A') ? movie.poster : './src/noMoviePoster.jpg'} />
                <h3>Title: {movie.title}</h3>
                <h4>Released Date: {movie.year}</h4>
                <div>
                  <input type="checkbox" id="seen" name="seen" />
                  <label > Seen </label>
                </div>
                <form>
                  <input type="text" id="comment" name="comment" placeholder="Write your comment here" />
                  <button type="submit"> Save comment </button>
                </form>
                <button onClick={() => {setShowModal(true); setId(movie._id)}}> Remove from favorites </button>
              </th>
            )
            )}
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default MyFavorites;