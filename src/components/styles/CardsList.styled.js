const { default: styled } = require('styled-components');

const Card = styled.li`
  width: 30%;
  @media (max-width: 768px) {
    width: 45%;
  }
  @media (max-width: 480px) {
    width: 75%;
  }
  list-style: none;
  border: 2px solid #d91b6055;
  /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */

  margin-left: 8px;
  margin-top: 8px;

  border-radius: 16px;
  padding: 8px;

  &:hover {
    border: 2px solid #d91b60ff;
    box-shadow: #7a7a8d90 0px 5px 15px;
  }

  & a {
    display: block;
    width: 100%;
    margin: 0;

    border-radius: 16px;
    overflow: hidden;

    & > img {
      width: 100%;
      height: auto;
      &:hover {
        transform: scale(115%);
      }
    }

    /* & ~ h2 {
      color: #ff6d00;
    } */
  }
`;

const ListCards = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding-left: 0;

  overflow: hidden;
`;

export { Card, ListCards };
