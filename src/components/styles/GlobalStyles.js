import { createGlobalStyle } from "styled-components";
import "../../assets/fonts/font.css"

const GlobalStyles = createGlobalStyle`
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  body,
  h1,
  h2,
  h3,
  h4,
  p {
    margin: 0;
  }
  
  body {
    text-rendering: optimizeSpeed;
    font-family: "HK Grotesk", 'sans-serif';
    font-size: 100%;
  }
  
  input,
  button,
  select {
    font: inherit;
  }
`

export default GlobalStyles