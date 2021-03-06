import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled, { css, ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle.js";
import themes from "./themes";
import MoonSVG from "./assets/icons/moon.svg";
import SunSVG from "./assets/icons/sun.svg";
import ReactorLogoSVG from "./assets/logos/reactor-logo.svg";
import SideBar from "./containers/SideBar";
import Nav from "./containers/Nav";
import MainContainer from "./containers/MainContainer";
import { FormGroup, Label, Input, Message } from "./components/TimeZoneForm";

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
        <SideBar>
          <FormGroup>
            <Label htmlFor="label">Label</Label>
            <Input id="label" />
            <Message>This is the validation message</Message>
          </FormGroup>
          <FormGroup>
            <Label>Label 2</Label>
            <Input />
            <Message>This is the validation message</Message>
          </FormGroup>
        </SideBar>
        <MainContainer />
      </>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
