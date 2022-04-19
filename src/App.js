import logo from './logo.svg';
import './App.css';

import './components/ButtonCp';
import ButtonCp from './components/ButtonCp';


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reloadasdfasdfasdfasdfasdfasdfasdf.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ButtonCp />
    </div>
  );
}

export default App;

/*
module.exports = App;
export default App;
import App from 'App'
App();

module.exports = { App, LEPP }
export { App, LEPP }
import { App, LEPP } from 'App'

export default React;
export { useState, useCallback }
import React, { useState, useCallback } from 'react'
*/

