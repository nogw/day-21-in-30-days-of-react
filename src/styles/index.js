import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #000;
    font-family: Helvetica, sans-serif, Arial;
    display: flex;
    justify-content: center;
  }
`;

export default GlobalStyle 