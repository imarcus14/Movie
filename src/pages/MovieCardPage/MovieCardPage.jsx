import "./MovieCardPage.scss";

import MovieCard from "../../components/MovieCard/MovieCard";
import { useState } from "react";

const MovieCardPage = ({movie}) => {

    const [search, setSearch] = useState("");

    const movies = [
        {id: 1, title: "Terminator", release_date:"2020"},
        {id: 2, title: "John", release_date:"2020"},
        {id: 3, title: "Terminator", release_date:"2020"},
        {id: 4, title: "Terminator", release_date:"2020"},
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        alert(search);
    }
    return (  
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Search" className="search-input" value={search} onChange={(e) => setSearch(e.target.value)}/>
                <button type="submit" className="search-button">Search</button>
            </form>
            <div className="movies-grid">
                {movies.map(movie => movie.title.toLowerCase().startsWith(search) && (<MovieCard movie={movie} key={movie.id}/>))}
            </div>
        </div>
    );
}
 
export default MovieCardPage;