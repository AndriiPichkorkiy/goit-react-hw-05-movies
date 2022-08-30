import { useParams, useNavigate, Outlet, useLocation } from "react-router-dom";
import apiMovies from "tools/apiMovies";
import { useState, useEffect, Suspense } from "react";
import Loader from "components/Loader";
import { Link, LinkList } from '../components/styles/Links.styled';
import { SearchButton as ButtonBack } from "../components/SearchBar/SearchBar.styled";
import { imgApi } from '../tools/getImgs'

import { LangContext } from "../components/LangContextProvider/";
import { useContext } from "react";

const MovieById = () => {
    const [movie, setMovie] = useState(null)
    const navigate = useNavigate();
    const { id, type } = useParams();

    const { lang } = useContext(LangContext);

    const textgoBack = lang === 'en' ? "Go back" : "Повернутися";
    const textStatus = lang === 'en' ? "Status" : "Стан";
    const textRaiting = lang === 'en' ? "Raiting" : "Рейтинг";
    const textGenres = lang === 'en' ? "Genres" : "Жанри";
    const textOverview = lang === 'en' ? "Overview" : "Опис";
    const textCast = lang === 'en' ? "Cast" : "Акторський склад";
    const textReviews = lang === 'en' ? "Reviews" : "Відгуки";

    const location = useLocation();

    useEffect(() => {
        const method = type === 'tv' ? 'getOneTv' : 'getOneMovie';
        apiMovies[method](id).then(response => response.json()).then(data => setMovie(data));
    }, [id, type, lang])

    function goBack() {
        const way = location.state?.from || "/";
        navigate(way, { replace: false });
    }

    if (!movie) return null;

    const { title, backdrop_path, poster_path, status, overview, vote_average, genres: genresArr } = movie;
    const genres = genresArr?.map(genre => genre.name).join(", ");
    const img = imgApi.get(poster_path);
    const style = { backgroundImage: `radial-gradient(#100e17dd 15%, #100e17 75% 110px), url(${imgApi.getOrigin(backdrop_path)})` };
    return (
        <>
            <div><ButtonBack type="back" style={{ fontSize: '18px' }} onClick={goBack}>{textgoBack}</ButtonBack></div>
            <div className="movie-page" style={style}>
                <div className="img-wrapper">
                    <img src={img} alt="poster" />
                </div>
                <div className="movie-info">
                    <h1 className="title">{title}</h1>
                    <div><span>{textStatus}: <span className="secondText">{status}</span></span> </div>
                    <div>
                        <span>{textRaiting}: <span className="secondText">{vote_average.toFixed(1)}</span></span>
                    </div>
                    <div>
                        <span>{textGenres}: <span className="secondText">{genres}</span></span>

                    </div>
                    <div>
                        <span>{textOverview}: <span className="secondText">{overview}</span></span>
                    </div>
                </div>
            </div>

            <LinkList>
                <li>
                    <Link to="cast" state={{ from: location.state?.from }} fitContent>{textCast}</Link>
                </li>
                <li>
                    <Link to="reviews" state={{ from: location.state?.from }}>{textReviews}</Link>
                </li>
            </LinkList>
            {/* <Loader /> */}
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </>
    );
}

export default MovieById;