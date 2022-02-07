import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/routes';
import GlobalStyle from './components/assets/global';
import StoreProvider from './context/store';

export default function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Routes />
      </BrowserRouter>
    </StoreProvider>
  );
}
