import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Normalize } from 'styled-normalize';
import { GlobalStyles } from './GlobalStyles/GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <Normalize />
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
