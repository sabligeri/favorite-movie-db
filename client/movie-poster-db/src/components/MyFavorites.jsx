import { useEffect, useState } from "react";

function MyFavorites() {

  const [favMovies, setFavMovies] = useState([]);

  useEffect(() => {
    fetch('/api/favmovies')
      .then(res => res.json())
      .then(favMovies => setFavMovies(favMovies))
      .catch(error => console.log(error))
  })

  return (
    <>
      <h1> My favorite movies </h1>
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