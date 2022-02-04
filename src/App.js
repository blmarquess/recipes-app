import React from 'react';
import { BrowserRouter } from 'react-router';
import Routes from './routes/routes';

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
