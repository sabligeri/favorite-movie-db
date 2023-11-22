import { useEffect, useState } from 'react';
import './App.css'
import SearchBar from './components/SearchBar';

function App() {

  const [searchInput, setSearchInput] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (searchInput.length > 0) ?
      fetch(`https://www.omdbapi.com/?s=${searchInput}&apikey=5b56c331`)
        .then(res => res.json())
        .then(movies => {
          if (movies.Response === 'True') {
            setMovies(movies.Search)
          }
        })
        .catch(error => {
          console.error("Error fetching movies:", error);
        })
      : setMovies([]);
  }, [searchInput]);


  const handleSearchInputChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value)
  }

  return (
    <>
      <SearchBar
        value={searchInput}
        inputChange={e => handleSearchInputChange(e)}
      />
      <table>
        <tbody>
          <tr>
            {movies.map(movie => (
              <th key={movie.imdbID}>
                <img src={(movie.Poster !== 'N/A') ? movie.Poster : './src/noMoviePoster.jpg'} />
                <h3>Title: {movie.Title}</h3>
              </th>
            )
            )}
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default App;
