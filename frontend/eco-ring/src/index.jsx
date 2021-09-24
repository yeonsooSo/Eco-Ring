import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Router from './routes';
import reportWebVitals from './reportWebVitals';

const GlobalStyles = createGlobalStyle`
  ${reset}
  html, body, #root {
    height: 100%;
  }
  * {
    box-sizing: border-box;
    font-family: 'Spoqa Han Sans Neo', 'sans-serif' !important;
    outline: none;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Router />
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
