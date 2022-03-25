import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import { combineReducers } from 'redux'
import CounterReducer from './reducer/CounterReducer.js';
import ColorReducer from './reducer/ColorReducer.js';

// const rootReducers =  combineReducers({
//   counter:CounterReducer,
//   color:ColorReducer
// })

console.log("Inside Index");
const store = createStore(ColorReducer);
console.log("Inside Index: Store Created");
ReactDOM.render(
  
  // Provide the store to Application
  <Provider store = {store}>
  
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
