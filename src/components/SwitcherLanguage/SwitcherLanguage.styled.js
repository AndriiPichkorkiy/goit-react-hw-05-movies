const { default: styled } = require('styled-components');

const Button = styled.button`
  position: absolute;
  right: 64px;
  top: 80px;
  width: 128px;
  font-size: 20px;
  text-decoration: none;
  background-color: #ff6d00;
  color: white;

  border: 0;
  border-radius: 8px;

  &:hover {
    background: white;
    box-shadow: -15px -15px 30px 0 #fff, 15px 15px 30px 0 #1d0dca17;
    z-index: 10;
    color: #2a1f62;
  }

  &.active {
    background-color: #ff6d00;

    &:hover {
      background: white;
      color: #2a1f62;
    }
  }

  &:active {
    box-shadow: -5px -5px 30px 0 #fff, 10px 10px 30px 0 #1d0dca17;
  }
`;

export { Button };
