import { createGlobalStyle } from "styled-components";
import "../../assets/fonts/font.css"


const GlobalStyles = createGlobalStyle`
 

  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p {
    margin: 0;
  }

  /* Set core body defaults */
  body {
    text-rendering: optimizeSpeed;
    font-family: "HK Grotesk", 'sans-serif';
    font-size: 100%;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  select {
    font: inherit;
  }
`

export default GlobalStyles