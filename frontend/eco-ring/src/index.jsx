import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Router from "./routes";
import reportWebVitals from "./reportWebVitals";
import "styles/styles.css";

const GlobalStyles = createGlobalStyle`
  ${reset}
  html, body, #root {
    height: 100%;
  }
  * {
    box-sizing: border-box;
    font-family: 'NS-R', 'sans-serif';
    outline: none;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Router />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
