import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    /* height: 100%; */
    width: 100%;
    box-sizing: border-box;
  }


  body {
    font-family: 'Inter', sans-serif;
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: 'Inter', sans-serif;
    line-height: 1.5em;
    margin: 5px 0;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }
`;
