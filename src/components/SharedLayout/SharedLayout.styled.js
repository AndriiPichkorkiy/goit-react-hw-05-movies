const { default: styled } = require('styled-components');

const Header = styled.header`
  padding: 0 32px;
  top: 0;
  left: 0;
  width: 100%;

  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;

  & .logo {
    margin: 32px;
    width: 200px;
  }

  & ~ .container {
  }
`;

export { Header };
