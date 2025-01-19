import "./MovieCard.scss";

import { useMovieContext } from "../../contexts/MovieContexts";

const MovieCard = ({ movie }) => {
  const { isFav, addToFav, removeFromFav } = useMovieContext();
  const fav = isFav(movie.id);

  const onFav = (e) => {
    e.preventDefault();
    if (fav) {
      removeFromFav(movie.id);
    } else {
      addToFav(movie);
    }
  };
  return (
    <div className="movie-card">
      <div className="movie-card__image">
        <img
          className="movie-card__image-solo"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-card-overlay">
          <button
            className={`movie-card__favourite ${fav ? "active" : ""}`}
            onClick={onFav}
          >
            ♡
          </button>
        </div>
      </div>
      <div className="movie-card__info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
};

export default MovieCard;
