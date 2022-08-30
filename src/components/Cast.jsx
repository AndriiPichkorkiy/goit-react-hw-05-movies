import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import apiMovies from "tools/apiMovies";
import { ListCards, Card } from "./styles/CardsList.styled";
import { imgApi } from '../tools/getImgs'

import { LangContext } from "./LangContextProvider/";
import { useContext } from "react";
import PlugNoInfo from "./PlugNoInfo";

const Cast = () => {
    const { id, type } = useParams();
    const [credits, setCredits] = useState(null);

    const { lang } = useContext(LangContext);

    const textCharacter = lang === 'en' ? "Character" : "Роль";

    useEffect(() => {
        apiMovies.getCredits(id, type).then(response => response.json()).then(data => setCredits(data.cast));
    }, [id])

    if (!credits) return null;

    if (!credits.length) return <PlugNoInfo />
    const castList = credits.map(({ cast_id, profile_path, name, character }) => {
        const img = imgApi.get(profile_path);

        return <Card key={cast_id}>
            <div style={{
                width: '100%', borderRadius: '16px',
                overflow: 'hidden',
                margin: 0,
            }}>
                <img onError={imgApi.imgOnError} src={img} alt="poster" />
            </div>

            <h3>{name}</h3>
            <p>{textCharacter}: {character}</p>
        </Card>
    })

    return (
        <ListCards>
            {castList}
        </ListCards>
    );
}

export default Cast;