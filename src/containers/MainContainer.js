import React from "react";
import styled from "styled-components";

const GridWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Grid = styled.div`
  padding-top: 8.2rem;
  padding-left: 23rem;
  display: grid;
  grid-template-columns: repeat(3, 38rem);
  margin-bottom: 1.5rem;
`;

const MainContainer = ({ children }) => (
  <GridWrapper>
    <Grid>{children}</Grid>
  </GridWrapper>
);

export default MainContainer;
