import { LangContext } from "./LangContextProvider/";
import { useContext } from "react";

const PlugNoInfo = ({ uk }) => {
    const { lang } = useContext(LangContext);
    const text = lang === 'en' ? "There is no information" : uk ? "Інформації немає українською мовою, спробуйте іншу" : "Інформації немає";
    return (
        <p>{text}</p>
    );
}

export default PlugNoInfo;