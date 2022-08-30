import { Link } from "react-router-dom";
import { Card, ListCards } from '../styles/CardsList.styled'
import { imgApi } from '../../tools/getImgs'

import { LangContext } from "../LangContextProvider/";
import { useContext } from "react";

const MoviesList = ({ movies, from }) => {
    const { lang } = useContext(LangContext);
    console.log(movies)
    const textReleaseDate = lang === 'en' ? "Release date" : "Прем'єра";
    const textRaiting = lang === 'en' ? "Raiting" : "Рейтинг";
    const listOfMovies = movies.map(item => {
        const { id, poster_path, release_date, vote_average, media_type } = item;
        const title = media_type === 'tv' ? item.name : item.title;
        const releaseDate = release_date || 'unknow'
        return <Card key={id} >

            <Link to={`/movies/${media_type}/${id}`} state={{ from }}><img src={imgApi.get(poster_path)} alt="poster" /></Link>
            <h2>{title}</h2>

            <p>{textReleaseDate}: <span className="secondText">{releaseDate}</span> </p>
            <p>{textRaiting}: <span className="secondText">{vote_average.toFixed(1)}/10</span> </p>
        </Card>
    });

    return (
        <ListCards>
            {listOfMovies}
        </ListCards>
    );
}

export default MoviesList;