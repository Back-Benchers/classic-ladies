import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './scss/main.scss';
import { HashRouter } from 'react-router-dom';

document.title = '|Ecom Portal|The Classic Ladies|';
ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);