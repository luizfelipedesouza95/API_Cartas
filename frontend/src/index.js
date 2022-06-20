import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import Main from './chat';

const root = ReactDOM.createRoot(document.getElementById("pagInicial"));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
)