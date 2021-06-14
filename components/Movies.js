import MovieItem from "./MovieItem";

function Movies(props) {
    return (
        <div className="space-x-4">
            {props.movies.map((movie,index) => (
                <MovieItem key= {movie.imdbID} movie={movie}/>
            ))}
        </div>
    );
  }

export default Movies;