function Movies({movies}) {
    return (
        <div class="space-x-4">
            {movies.Search.map((movie,index) => (
            <div class="inline-block">
                <img src={movie.Poster} alt = ""/>
            </div>
            ))}
        </div>
    );
  }

export default Movies;