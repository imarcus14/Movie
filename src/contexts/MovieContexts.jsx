import { createContext, useContext, useEffect, useState } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

const MovieProvider = ({ children }) => {
  const [favourite, setFavourite] = useState([]);

  useEffect(() => {
    const storedFavs = localStorage.getItem("favourites");

    if (storedFavs) setFavourite(JSON.parse(storedFavs));
  }, []);

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourite));
  }, [favourite]);

  const addToFav = (movie) => {
    setFavourite((prev) => [...prev, movie]);
  };

  const removeFromFav = (movieId) => {
    setFavourite((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  const isFav = (movieId) => {
    return favourite.some((movie) => movie.id === movieId);
  };

  const value = {
    favourite,
    addToFav,
    removeFromFav,
    isFav,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};

export default MovieProvider;
