import { useEffect, useState } from 'react';
import './App.css'
import SearchBar from './components/SearchBar';
import MoviesTable from './components/MoviesTable';

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
      <MoviesTable
      movies={movies}
      />
    </>
  )
}

export default App;
