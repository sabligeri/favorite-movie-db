import { useEffect, useState } from "react";
import DeleteVerify from "./DeleteVerify";

function MyFavorites() {
  const [updatedSeen, setUpdatedSeen] = useState(false);
  const [seen, setSeen] = useState(null);
  const [comment, setComment] = useState('');
  const [favMovies, setFavMovies] = useState([]);
  const [editFavMovies, setEditFavMovies] = useState(null);
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
  }, [])


  const handleEditFavMovies = (movie) => {
    setEditFavMovies(movie);
    setSeen(movie.seen);
    setComment(movie.comment);
  };

  const handleUpdateFavMovies = () => {
    if (editFavMovies) {
      fetch(`/api/favmovies/${editFavMovies._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          seen: seen,
          comment: comment,
        }),
      })
        .then(response => {
          if (response.ok) {
            setFavMovies(movies => movies.map(movie => movie._id === editFavMovies._id ? { ...movie, seen: seen, comment: comment }
              : movie
            )
            );
            setEditFavMovies(null);
            setSeen('');
            setComment('');
          } else {
            console.log('Failed to update favorite movie list!');
          }
        })
        .catch(error => console.log(error));
    }
  };

  return (
    <>
      <h1> My favorite movies </h1>
    {(showModal === true) ? (
        <DeleteVerify deleteMovie={() => deleteMovie(id)} closeModal={setShowModal}/>) : (null)
      }
      <div style={{ overflowX: "auto", display: "flex" }}>
        {favMovies.map(movie => (
          <div style={{ display: "inline-block", margin: "10px", textAlign: "center" }} key={movie._id}>
            <img src={(movie.poster !== 'N/A') ? movie.poster : './src/noMoviePoster.jpg'} />
            <h3>Title: {movie.title}</h3>
            <h4>Released Date: {movie.year}</h4>
            <div>
              {editFavMovies === movie ? (
                <input
                  type="checkbox"
                  name='I have seen it'
                  checked={seen === 'seen'}
                  onChange={() => setSeen(seen === 'seen' ? 'unseen' : 'seen')}
                />
              ) : (
                movie.seen
              )}
            </div>
            <div>
              {editFavMovies === movie ? (
                <input
                  type="text"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
              ) : (
                movie.comment
              )}
            </div>
            <div>
              {editFavMovies === movie ? (
                <button onClick={handleUpdateFavMovies}>Save</button>
              ) : (
                <button onClick={() => handleEditFavMovies(movie)}>Edit</button>
              )}
              <button onClick={() => { setShowModal(true); setId(movie._id) }}> Remove from favorites </button>
            </div>
          </div>
        )
        )}
      </div>
    </>
  )
}

export default MyFavorites;