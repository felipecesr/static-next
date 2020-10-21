import { createGlobalStyle } from "styled-components";
import fonts from "styles/fonts";

const GlobalStyles = createGlobalStyle`
  ${fonts}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    background-color: #1D2128;
    color: #fff;
    font-family: 'Lora', Georgia, serif;
  }

  a {
    transition: opacity 0.3s ease 0s;
  }

  a,
  a:focus,
  a:hover {
    color: inherit;
    text-decoration: underline;
  }

  img {
    border: none;
    max-width: 100%;
    vertical-align: middle;
  }
`;

export default GlobalStyles;
