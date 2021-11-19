import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/* CSS */
import './assets/css/grid.css';
import './assets/css/theme.css';
import './assets/css/index.css';
import 'boxicons';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers/ThemeReducer';
const store = createStore(rootReducer);


document.title = '|Admin Portal|The Classic Ladies|';
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
