import MoviesList from "components/MoviesList";
import { useState, useEffect } from "react";
import apiMovies from "tools/apiMovies";

import { LangContext } from "components/LangContextProvider/";
import { useContext } from "react";

const Home = () => {
    const [popMovies, setPopMovies] = useState([]);

    const { lang } = useContext(LangContext);

    useEffect(() => {
        apiMovies.getMovies().then(response => response.json()).then(data => setPopMovies(data.results));
    }, [lang]);

    return (
        <>
            <MoviesList movies={popMovies} from="/" />
        </>
    );
}

export default Home;