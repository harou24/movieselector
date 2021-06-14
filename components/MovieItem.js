function MovieItem(props) {

    let posterSrc = props.movie.Poster;

    if (props.movie.Poster == "N/A")
        posterSrc = "https://www.aepint.nl/wp-content/uploads/2014/12/No_image_available.jpg";

    return (
        <div className="inline-block">
            <p>{props.movie.Title}</p>
            <img src={posterSrc} alt = "movie"/>
        </div> 
    )
}

export default MovieItem
