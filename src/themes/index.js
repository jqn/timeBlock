import palette from "./palette";
import typography from "./typography";
import lightTheme from "./lightTheme";
import darkTheme from "./darkTheme";

const themes = {
  palette,
  typography,
  zIndex: {
    appBar: 1200,
    drawer: 1100,
  },
  common: {
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  },
  lightTheme,
  darkTheme,
};

export default themes;
