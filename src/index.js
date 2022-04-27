import React from 'react';
import ReactDOM from 'react-dom/client'; // 17.0.2 react-dom 
import App from './App';
import { Provider } from 'react-redux';
import store from 'store'
import reportWebVitals from './reportWebVitals';
// import axios from 'axios';

import 'antd/dist/antd.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/scss/bootstrap.scss';
import 'assets/scss/_common.scss';

// axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
