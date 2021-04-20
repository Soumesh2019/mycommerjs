/* eslint-disable comma-dangle */
/* eslint-disable quotes */
import React from "react";
import ReactDOM from "react-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import { CssBaseline } from "@material-ui/core";
import App from "./App";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#26c72b",
    },
    secondary: {
      main: "#7ad67d",
    },
  },
  typography: {
    fontFamily: '"Segoe UI Emoji"',
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundColor: "#000",
          overflowX: "hidden",
          margin: "10px",
          color: "yellow",
        },
      },
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
