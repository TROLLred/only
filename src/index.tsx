import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { createGlobalStyle } from 'styled-components';
import FontStyles from './fonts';

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Helvetica Neue';
  }

  :root {
    --bg: #FFFFFF;
    --color: #000000;
    --primary-bg: #4A67FF;
    --disabled-primary-bg: #99A9FF;
    --error-bg: #F5E9E9;
    --error-color: #E26F6F;

    --input-bg: #F5F5F5;
    --input-color: #232323;
    --label-color: 1F1F1F;
  }
`;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Global />
    <FontStyles />
    <App />
  </BrowserRouter>
);