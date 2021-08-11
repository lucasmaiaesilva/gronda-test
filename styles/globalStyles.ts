import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 11px;
    scroll-behavior: smooth;
    @media screen and (min-width: 1024px) {
      font-size: 10px;
    }

    @media screen and (min-width: 1500px) {
      font-size: 14px;
    }
  }
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    & * {
      box-sizing: border-box;
    }
  }
`;

export default GlobalStyle;
