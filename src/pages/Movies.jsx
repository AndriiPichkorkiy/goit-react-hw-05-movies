import SearchBar from "components/SearchBar/SearchBar";
import apiMovies from "tools/apiMovies";
import { useState, useEffect } from "react";
import MoviesList from "components/MoviesList/MoviesList";
import { useSearchParams, useLocation } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Movies = () => {
    const [searchMovies, setSearchMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query") || '';
    const location = useLocation();

    const onChangeInput = (value) => {
        setSearchParams({ query: value })
    }

    const onSubmit = () => {
        apiMovies.getMovieByName(query).then(response => response.json()).then(data => {
            if (!data.total_results) return toast("Movie not found");
            setSearchMovies(data.results)
        });
    }
    //do ones
    useEffect(() => {
        if (query) onSubmit();
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <SearchBar callBack={onSubmit} onChangeInput={onChangeInput} value={query} />
            <MoviesList movies={searchMovies} from={"/Movies" + location.search} />
            <ToastContainer theme="dark" />
        </>
    );
}

export default Movies;