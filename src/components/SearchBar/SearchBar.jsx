import { InputWrapper, InputSearch, SearchButton } from "./SearchBar.styled";

import { LangContext } from "../LangContextProvider/";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

const SearchBar = ({ value, callBack, onChangeInput }) => {
    const { lang } = useContext(LangContext);
    const [isFirstRender, setIsFirstRender] = useState(true)

    const textPlaceholder = lang === 'en' ? "Type your request" : "Введіть свій запит";
    const textSearch = lang === 'en' ? "Search" : "Пошук";


    useEffect(() => {
        if (isFirstRender) return setIsFirstRender(false);
        callBack()
        // eslint-disable-next-line
    }, [lang]);

    function inputChanged({ target: { value } }) {
        onChangeInput(value);
    }

    function onSubmit(event) {
        event.preventDefault()
        callBack();
    }

    return (
        <InputWrapper >
            <form onSubmit={onSubmit}>
                <InputSearch placeholder={textPlaceholder} onChange={inputChanged} value={value} autoFocus />
                <SearchButton type="submit">{textSearch}</SearchButton>
            </form>
        </InputWrapper>
    );
}

export default SearchBar;