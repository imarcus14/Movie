import "./MovieCardPage.scss";

import { getPopMovies, searchMovies } from "../../services/api";
import { useEffect, useState } from "react";

import MovieCard from "../../components/MovieCard/MovieCard";

const MovieCardPage = ({ movie }) => {
  const [search, setSearch] = useState("");

  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopMovies = async () => {
      try {
        const popMovies = await getPopMovies();
        setMovies(popMovies);
      } catch (e) {
        console.error(e);
        setError("Failed to load movies");
      } finally {
        setLoading(false);
      }
    };

    loadPopMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    if (loading) return;

    setLoading(true);
    try {
      const searchResults = await searchMovies(search);
      setMovies(searchResults);
      setError(null);
    } catch (error) {
      console.error(error);
      setError("Failed to search movies");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search"
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieCardPage;
