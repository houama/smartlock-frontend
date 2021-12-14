import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import reducers from './state/reducers'

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
