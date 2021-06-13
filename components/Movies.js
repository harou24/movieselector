function Movies(props) {
    return (
        <div class="space-x-4">
            {props.movies.map((movie,index) => (
            <div class="inline-block">
                <img src={movie.Poster} alt = "movie"/>
            </div>
            ))}
        </div>
    );
  }

export default Movies;