const MoviesTable = ({ movies }) => {
  return (
    <table>
        <tbody>
          <tr>
            {movies.map(movie => (
              <th key={movie.imdbID}>
                <img src={(movie.Poster !== 'N/A') ? movie.Poster : './src/noMoviePoster.jpg'} />
                <h3>Title: {movie.Title}</h3>
                <h4>Released Date: {movie.Year}</h4>
              </th>
            )
            )}
          </tr>
        </tbody>
      </table>
  )
}

export default MoviesTable;