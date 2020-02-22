import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore , applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './containers/App';  //father of all components
import * as serviceWorker from './serviceWorker';
import { searchRobots, requestRobots } from './reducers';
import 'tachyons';

  //destructured because it isnt default export

  const logger = createLogger();   //logger function is now middleware which we can apply to our redux
  
  const rootReducer= combineReducers({searchRobots,requestRobots})

  //creating store
  const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(  //three card components wrapped in single element div to return
  <Provider  store= { store } >   {/*provider component now passses store to all component and the store uses reducer to create that object tree of state*/}
    <App />
  </Provider>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
