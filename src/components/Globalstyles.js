import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: black;
  }

  p, a {
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
   
  }

  h1,h2,h3{
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;700;900&display=swap');
 
  }

  *,
  *:before,
  *:after {
        box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    color:white;
  }
`;

export default GlobalStyles;
