import axios from "axios";

const API_KEY = "c8aee6d75b100b2598ba969ec132140b";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopMovies = async () => {
    const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = response.data;
    return data.results;
};
export const searchMovies = async (query) => {
    const response = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = response.data;
    return data.results;
};