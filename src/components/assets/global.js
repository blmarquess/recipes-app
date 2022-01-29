import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`* {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  .loginView {
    display: grid;
  }

  .header-app {
    display: flex;
    height: 100%;
    width: 30px;
  }

  .footer {
    bottom: 0;
    height: 60px;
    position: absolute;
    width: 100%;
  }

`;

export default GlobalStyle;
