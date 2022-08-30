import { LangContext } from "../LangContextProvider/";
import { useContext } from "react";
import { Button } from "./SwitcherLanguage.styled";


const SwitcherLanguage = () => {
    const { lang, toggleLang } = useContext(LangContext);

    const text = lang === 'en' ? 'Languange: English' : 'Мова: Українська'

    const onClick = () => {
        toggleLang();
    }

    return (
        <Button onClick={onClick}>
            {text}
        </Button>
    );
}

export default SwitcherLanguage;