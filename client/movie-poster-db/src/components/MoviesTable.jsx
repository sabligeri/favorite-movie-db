const MoviesTable = ({ movies }) => {

  function handleSaveToFavMovies(movie) {
    const poster = movie.Poster;
    const title = movie.Title;
    const year = movie.Year;
    fetch('/api/favmovies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ poster, title, year })
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }
  return (
    <table>
        <tbody>
          <tr>
            {movies.map(movie => (
              <th key={movie.imdbID}>
                <img src={(movie.Poster !== 'N/A') ? movie.Poster : './src/noMoviePoster.jpg'} />
                <h3>Title: {movie.Title} </h3>
                <h4>Released Date: {movie.Year}</h4>
                <button onClick={() => handleSaveToFavMovies(movie)}>Add to favorites</button>
              </th>
            )
            )}
          </tr>
        </tbody>
      </table>
  )
}

export default MoviesTable;