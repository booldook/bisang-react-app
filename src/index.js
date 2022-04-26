import React from 'react';
import ReactDOM from 'react-dom/client'; // 17.0.2 react-dom 
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/scss/bootstrap.scss';
import 'assets/scss/_common.scss';

// axios.defaults.baseURL = 'http://127.0.0.1:3000';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
