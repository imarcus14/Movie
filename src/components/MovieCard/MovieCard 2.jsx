import "./MovieCard.scss";

const MovieCard = ({movie}) => {

    const onFav = () => {
        alert("clicked")
    }
    return ( 

        <div className="movie-card">

            <div className="movie-card__image">
                <img src={movie.url} alt={movie.title}/>
                <div className="movie-card-overlay">
                    <button className="movie-favourite" onClick={onFav}>♡</button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
            </div>

        </div>

     );
}
 
export default MovieCard;