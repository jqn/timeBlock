import React, { useState } from "react";
import ReactDOM from "react-dom";
import Header from "./containers/Header";
import MainSection from "./containers/MainSection";
import styled, { css, ThemeProvider } from "styled-components";
import "./GlobalStyle.js";
import themes from "./themes";
import MoonSVG from "./assets/icons/moon.svg";
import SunSVG from "./assets/icons/sun.svg";
import ReactorLogoSVG from "./assets/logos/unsplash-logo.svg";

const lightTheme = () => ({
  ...themes["common"],
  ...themes["lightTheme"],
});

const darkTheme = () => ({
  ...themes["common"],
  ...themes["darkTheme"],
});

const App = () => {
  const [theme, setTheme] = useState(lightTheme());
  const setDarkTheme = () => setTheme(darkTheme());
  const setLightTheme = () => setTheme(lightTheme());
  return (
    <div className="App">
      <Header />
      <MainSection />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
