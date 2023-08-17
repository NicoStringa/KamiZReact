import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    :root {
      --caribe: #2B6777;
      --columbia: #C8D8E4;
      --smoke: #F2F2F2;
      --keppel: #52AB98;
      --rich: #050517;
      --auburn: #A52422;
      --btn-gradient: linear-gradient(83deg, #F85B1A, #E59982);
      --btn-gradient-secondary: linear-gradient(140deg, #288ba3, #8ec4d0);
  }

  html{
    scroll-behavior: smooth;
  }

  * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
  font-family: "Open Sans", sans-serif;
  }

  body {
    margin: 0 auto;
    padding: 0;
    width: 100%;
    background: var(--caribe);
    font-family: 'Montserrat', sans-serif;
    color: white;
    -webkit-tap-highlight-color: transparent;
    overflow-x: hidden
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }

`;
