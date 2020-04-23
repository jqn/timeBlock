import React from "react";
import styled from "styled-components";

const Bar = styled.div`
  padding-bottom: 2rem;
  padding-left: 2rem;
  position: fixed;
  margin-top: 8.2rem;
  top: 0;
  bottom: 0;
  overflow-y: scroll;
  width: 30rem;
  background: ${(props) => props.theme.bgColor};
  z-index: 2;
`;

const SideBar = ({ children }) => <Bar>{children}</Bar>;

export default SideBar;
