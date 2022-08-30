const { default: styled, css } = require('styled-components');

const InputWrapper = styled.div`
  margin: 0 auto;
  border-radius: 12px;
  padding: 8px 12px;
  border: solid 0px #d91b6055;
  width: fit-content;

  background: linear-gradient(45deg, #d91b60, #ff6d00);
`;

const InputSearch = styled.input`
  border-radius: 12px;
  padding: 8px;
  border: 0px solid #d91b60;
  background-color: #100e17;
  color: #7a7a8d;
  margin-right: 16px;

  &:focus-visible {
    background-color: #100e17;
    font-size: 19px;
    outline: none;

    color: #ff6d00;
    border-color: #ff6d00;

    /* outline: 2px solid #ff6d00; */
    border: 2px solid #d91b6000;
  }
`;

const SearchButton = styled.button`
  position: relative;
  border-radius: 12px;
  padding: 8px 12px;
  border: solid 4px #100e17;
  width: fit-content;
  color: white;
  height: 100%;

  background: linear-gradient(45deg, #d91b60, #ff6d00);

  &:hover {
    cursor: pointer;
    background: #100e17;
    text-shadow: 1px 1px 90px 90px #d91b60, 1px 1px 10px #d91b60;
    ${props => {
      if (props.type !== 'back') {
        return css`
          -webkit-animation: glow 1s ease-in-out infinite alternate;
          -moz-animation: glow 1s ease-in-out infinite alternate;
          animation: glow 1s ease-in-out infinite alternate;
        `;
      }
    }}

    color: #e60073;
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(1px);
  }

  @keyframes glow {
    from {
      text-shadow: 0 0 10px #fff, 0 0 15px #fff, 0 0 25px #e60073,
        0 0 30px #e60073, 0 0 35px #e60073, 0 0 40px #e60073, 0 0 45px #e60073;
    }
    to {
      text-shadow: 0 0 15px #fff, 0 0 29px #ff4da6, 0 0 25px #ff4da6,
        0 0 30px #ff4da6, 0 0 45px #ff4da6, 0 0 50px #ff4da6, 0 0 55px #ff4da6;
    }
  }
`;

export { InputWrapper, InputSearch, SearchButton };
