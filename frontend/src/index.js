import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import Main from './chat';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("body"));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
)

reportWebVitals();