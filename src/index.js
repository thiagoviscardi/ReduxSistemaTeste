/* eslint-disable default-case */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import allReducer from './store/combineReducer';
import {Provider} from 'react-redux';
import { ToastProvider } from 'react-toast-notifications';

const store = createStore(allReducer)
ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
    <ToastProvider>
      <App />
    </ToastProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
