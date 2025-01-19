import "./Favourites.scss";

import MovieCard from "../../components/MovieCard/MovieCard";
import { useMovieContext } from "../../contexts/MovieContexts";

const Favourites = () => {
  const { favourite } = useMovieContext();

  if (favourite) {
    return (
      <div className="movies-grid">
        {favourite.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    );
  }
  return (
    <div className="favourites-empty">
      <h2>No favourites Yet</h2>
      <p>Start adding some</p>
    </div>
  );
};

export default Favourites;
