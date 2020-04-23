import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.bgColor};
  box-sizing: border-box;
  height: 8.2rem;
  padding-left: 2rem;
  padding-right: 2rem;
  position: fixed;
  width: 100%;
  z-index: 2;
`;

export default Nav;
