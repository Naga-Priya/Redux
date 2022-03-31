import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import { combineReducers } from 'redux'
import CounterReducer from './reducer/CounterReducer.js';
import ColorReducer from './reducer/ColorReducer.js';
import {myLogger} from './middleware/myLogger';
import {myLogger2} from './middleware/myLogger2';
import ColorPicker from './ColorPicker/ColorPicker.js';
import MyColorsReducer from './ColorPicker/MyColorsReducer.js';
import logger from 'redux-logger';
import Posts from './AxiosMW/Posts';
import thunk from 'redux-thunk';
import postReducer from './AxiosMW/postReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
// const rootReducers =  combineReducers({
//   counter:CounterReducer,
//   color:ColorReducer
// })

console.log("Inside Index");

const rootReducer = combineReducers({
  // Define a top-level state field named `colors`, handled by `ColorReducer`
  colval: ColorReducer,
  MyColors: MyColorsReducer
})
const devTools = composeWithDevTools(applyMiddleware(myLogger,myLogger2));
//const store = createStore(MyColorsReducer,applyMiddleware(thunk));
//const store = createStore(postReducer,applyMiddleware(thunk));
const store = createStore(ColorReducer,devTools);
// const store = createStore(rootReducer,applyMiddleware(logger));
console.log("Inside Index: Store Created");
ReactDOM.render(
  
  // Provide the store to Application
  <Provider store = {store}>
    {/* <ColorPicker /> */}
    <App />
    {/* <Posts /> */}
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
