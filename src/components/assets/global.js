import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`* {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  .loginView {
    display: grid;
    margin: 0 auto;
  }

  .footer {
    align-items: center;
    bottom: 0;
    color: white;
    display: flex;
    height: 40px;
    justify-content: space-between;
    position: fixed;
    width: 100%;
  }

  .default-size {
    margin: 0 auto;
    padding: 5px;
    width: 360px;
  }

  .header-top {
    display: flex;
    flex-direction: column;
  }

  .header-app {
    display: flex;
    flex: wrap;
    flex-direction: row-reverse;
    height: 30px;
    justify-content: space-around;
    width: 100%;
  }

  .radios-filter {
    display: flex;
    justify-content: space-between;
  }
`;

export default GlobalStyle;
