import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
   
  body {
    margin: 0;
    padding: 0;
    background: black;
  }

  p, a, span, label {
    font-family: "Roboto", sans-serif;
  }

  h1,h2,h3{
    font-family: "Poppins", sans-serif;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    color:white;
  }
`;

export default GlobalStyles;
