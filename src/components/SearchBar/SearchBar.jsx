import { InputWrapper, InputSearch, SearchButton } from "./SearchBar.styled";

const SearchBar = ({ value, callBack, onChangeInput }) => {
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
                <InputSearch placeholder="type your request" onChange={inputChanged} value={value} />
                <SearchButton type="submit">Search</SearchButton>
            </form>
        </InputWrapper>
    );
}

export default SearchBar;