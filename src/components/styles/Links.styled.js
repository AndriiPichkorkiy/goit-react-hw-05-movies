import { NavLink } from 'react-router-dom';

const { default: styled, css } = require('styled-components');

const Link = styled(NavLink)`
  width: 128px;
  font-size: 20px;
  text-decoration: none;
  background-color: #d91b60;
  color: white;


  border: 0;
  border-radius: 8px;
 
  box-sizing: border-box;

  cursor: pointer;
  display: inline-flex;
  font-family: 'Cascadia Code', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono',
    monospace;
  font-size: 1rem;
  justify-content: center;
  line-height: 1.5rem;
  padding: 15px;
  position: relative;
  text-align: left;
  transition: 0.2s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: pre;

  word-break: normal;
  word-spacing: normal;

  margin: 0 8px;

  &:hover {
    background: white;
    box-shadow: -15px -15px 30px 0 #fff, 15px 15px 30px 0 #1d0dca17;
    z-index: 10;
    color: #2a1f62;
  }

  @media (min-width: 768px) {
    & {
      padding: 24px;
    }
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

  ${props => {
    if (props.fitContent)
      return css`
        width: fit-content;
      `;
  }}
`;

const LinkList = styled.ul`
  border-radius: 12px;
  padding: 8px;
  border: solid 2px #d91b60;

  & > li {
    list-style: none;
    display: inline-block;
  }
`;
export { LinkList, Link };
