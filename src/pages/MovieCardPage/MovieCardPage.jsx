import "./MovieCardPage.scss";

import MovieCard from "../../components/MovieCard/MovieCard";

const MovieCardPage = ({movie}) => {
    return (  
        <>
            <MovieCard movie={movie}/>
        </>
    );
}
 
export default MovieCardPage;