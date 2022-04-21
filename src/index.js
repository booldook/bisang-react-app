import React from 'react';
import ReactDOM from 'react-dom/client'; // 17.0.2 react-dom 
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/scss/bootstrap.scss';
import 'assets/scss/_common.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
