const Movie = ({ movie }) => {
    const poster = movie.poster
    const title = movie.title
    const year = movie.year
    return (
        <div>
            <img src={poster}></img>
            <h1>{title}</h1>
            <h2>{year}</h2>
            
        </div>
    )
}

export default Movie;