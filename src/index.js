import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.component';
// import {BrowserRouter} from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';

//import the reducer to be added to combine reducers
import { buttonOneReducer, userReducer } from './redux/reducer';

//import redux logger for logging of reducer actions
import logger from 'redux-logger';


const storeInstance = createStore (
  combineReducers({
    buttonOneReducer, userReducer
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);

