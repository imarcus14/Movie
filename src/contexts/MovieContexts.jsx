import { createContext, useContext, useEffect, useState } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

const MovieProvider = ({ children }) => {
  const [favourite, setFavourite] = useState([]);

  useEffect(() => {
    try {
      const storedFavs = localStorage.getItem("favourites");
      if (storedFavs) {
        setFavourite(JSON.parse(storedFavs));
      }
    } catch (error) {
      console.error("Failed to load favourites from localStorage:", error);
      setFavourite([]);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("favourites", JSON.stringify(favourite));
    } catch (error) {
      console.error("Failed to save favourites to localStorage:", error);
    }
  }, [favourite]);

  const addToFav = (movie) => {
    setFavourite((prev) => {
      if (!prev.some((fav) => fav.id === movie.id)) {
        return [...prev, movie];
      }
      return prev;
    });
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
