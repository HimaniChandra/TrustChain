import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app'; // assuming app.js exports your main component
import './index.css'; // this imports Tailwind

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
