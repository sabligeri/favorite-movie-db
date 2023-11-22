function MyFavorites ({favMovies, submitComment}) {
    return (
        <>
        <h1> My favorite movies </h1>
        <table>
        <tbody>
          <tr>
            {favMovies.map(movie => (
              <th key={movie.imdbID}>
                <img src={(movie.Poster !== 'N/A') ? movie.Poster : './src/noMoviePoster.jpg'} />
                <h3>Title: {movie.Title}</h3>
                <h4>Released Date: {movie.Year}</h4>
                <div>
                <input type="checkbox" id="seen" name="seen" value={checked} />
                <label > Seen </label>
                </div>
                <form>
                <input type="text" id="comment" name="comment" placeholder="Write your comment here" />
                <button type="submit" onClick={submitComment}> Save comment </button>
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