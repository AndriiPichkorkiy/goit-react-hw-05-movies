import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import apiMovies from "tools/apiMovies";

import { LangContext } from "./LangContextProvider/";
import { useContext } from "react";
import PlugNoInfo from "./PlugNoInfo";

const Reviews = () => {
    const { id } = useParams();
    const [reviews, setReviews] = useState(null);

    const { lang } = useContext(LangContext);

    const textAuthor = lang === 'en' ? "Author" : "Автор";
    const textTime = lang === 'en' ? "Time" : "Час";
    const textContent = lang === 'en' ? "Content" : "Зміст";

    useEffect(() => {
        apiMovies.getReviews(id).then(response => response.json()).then(data => setReviews(data.results));
    }, [id])

    if (!reviews) return null;

    if (!reviews.length) return <PlugNoInfo uk />;

    const reviewsList = reviews.map(({ id, author, content, created_at }) => {
        const time = new Date(created_at).toLocaleDateString()
        const splitedContent = content.split(/\r\n|\n\r|\n|\r/);
        const complitedContet = splitedContent.map(text => <p>{text}</p>);

        return <li key={id} style={{ width: '80%' }}>

            <p>{textAuthor}: <span className="secondText"> {author} </span></p>

            <p>{textTime}: <span className="secondText">{time} </span></p>
            <p>{textContent}: <span className="secondText">{complitedContet} </span></p>
        </li>
    })

    return (
        <ul>
            {reviewsList}
        </ul>
    );
}

export default Reviews;