import React, { useState } from "react";
import ReactDOM from "react-dom";
import Header from "./containers/Header";
import MainSection from "./containers/MainSection";
import styled, { css, ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle.js";
import themes from "./themes";
import MoonSVG from "./assets/icons/moon.svg";
import SunSVG from "./assets/icons/sun.svg";
import ReactorLogoSVG from "./assets/logos/unsplash-logo.svg";

import Nav from "./components/Nav";

const lightTheme = () => ({
  ...themes["common"],
  ...themes["lightTheme"],
});

const darkTheme = () => ({
  ...themes["common"],
  ...themes["darkTheme"],
});

const ReactorLogo = styled(ReactorLogoSVG)`
  fill: ${(props) => props.theme.color};
  width: 4rem;
  height: 4rem;
  backface-visibility: hidden;
  box-sizing: border-box;
  overflow: hidden;
  vertical-align: middle;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;

const Title = styled.h1`
  display: inline-block;
  font-size: 2rem;
  font-weight: 700;
  color: ${(props) => props.theme.color};
`;

const Subtitle = styled.span`
  font-size: 1.3rem;
  font-weight: 500;
`;

const ThemeIcon = css`
  width: 2rem;
  height: 2rem;
  margin-left: auto;
  cursor: pointer;
`;

const MoonIcon = styled(MoonSVG)`
  ${ThemeIcon}
`;

const SunIcon = styled(SunSVG)`
  ${ThemeIcon}
`;

const App = () => {
  const [theme, setTheme] = useState(lightTheme());
  const setDarkTheme = () => setTheme(darkTheme());
  const setLightTheme = () => setTheme(lightTheme());
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Nav theme={theme}>
          <ReactorLogo />
          <TitleWrapper>
            <Title>Reactor Labs</Title>
            <Subtitle>Reactive</Subtitle>
          </TitleWrapper>
          {theme.type === "light" && <MoonIcon onClick={setDarkTheme} />}
          {theme.type === "dark" && <SunIcon onClick={setLightTheme} />}
        </Nav>
        {/* <MainSection /> */}
      </>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
